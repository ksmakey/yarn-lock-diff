const { execSync } = require('child_process');
const fs = require('fs');
const lockfile = require('@yarnpkg/lockfile');

module.exports = class YarkLockDiff {
    run() {
        console.log('run command');
        let previous = this.loadLockFile('HEAD:yarn.lock');
        let current = this.loadLockFile('yarn.lock');

        let changes = this.diff(previous, current);
        console.log(changes);

        return;
    }

    loadLockFile(file) {
        let text = '';
        if (fs.existsSync(file)) {
            text = fs.readFileSync(file, 'utf8');
        } else {
            text = execSync(`git show ${file}`).toString();
        }

        let json = lockfile.parse(text);

        return json;
    }

    diff(previous, current) {
        let changes = {};

        const previousPackages = this.formatNameAndVersion(previous);
        const currentPackages = this.formatNameAndVersion(current);

        Object.keys(previousPackages).forEach(function(key, i) {
            changes[key] = {previous: previousPackages[key].version, current: 'REMOVED'};
        });

        Object.keys(currentPackages).forEach(function(key, i) {
            if (!changes[key]) {
                changes[key] = {previous: 'NEW', current: currentPackages[key].version};
            } else {
                if (changes[key].previous == currentPackages[key].version) {
                    delete changes[key];
                } else {
                    changes[key].current = currentPackages[key].version;
                }
            }
        });

        return changes;
    }

    formatNameAndVersion(obj) {
        let packages = {};
        Object.keys(obj.object).forEach(function(key) {
            const name = key.split('@')[0]
            packages[name] = { name: name, version: obj.object[key].version };
        });

        return packages;
    }
}
