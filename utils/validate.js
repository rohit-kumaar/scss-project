export function validatePath(path) {
    const invalidChars = /[<>:"\\|?*]/;
    return !invalidChars.test(path) && path.trim() !== "";
}

export function validateFileName(fileName) {
    const invalidChars = /[<>:"\/\\|?*]/;
    return !invalidChars.test(fileName) && fileName.trim() !== "";
}

export function validateProjectName(projectName) {
    const invalidChars = /[<>:"\/\\|?*\x00-\x1F]/;
    const reservedNames = /^(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])$/i;
    return !invalidChars.test(projectName) && !reservedNames.test(projectName) && projectName.trim() !== "";
}