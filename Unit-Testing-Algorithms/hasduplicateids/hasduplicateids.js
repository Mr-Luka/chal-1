function hasDuplicateIds(root, idSet = new Set()){
    if(!root) return false;

    if(idSet.has(root.id)) return true; // it will check the root ID and compare it to the set

    root.id && idSet.add(root.id);

    if(root.hasChildNodes()){
        for(let child of root.children){
            const result = hasDuplicateIds(child, idSet);
            if(result) return true; // this means there is a duplicate
        }
    }
    return false;
}

module.exports = hasDuplicateIds;