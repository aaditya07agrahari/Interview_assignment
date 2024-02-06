class FeatureManager {
    constructor(data){
        this.data = data;
    }

    //Filter Method
    filter(criteria) {
        return this.data.filter(item => {
            for(let key in criteria) {
                if(item[key] != criteria[key]){
                    return false;
                }
            }
            return true;

        });
    }

    // Search method
    search(keyword) {
        return this.data.filter(item => {
            for (let key in item) {
                if (typeof item[key] === 'string' && item[key].toLowerCase().includes(keyword.toLowerCase())) {
                    return true;
                }
            }
            return false;
        });
    }

    // Pagination method
    paginate(page, pageSize) {
        const startIndex = (page - 1) * pageSize;
        return this.data.slice(startIndex, startIndex + pageSize);
    }

    // Sort method
    sort(property, order = 'asc') {
        return this.data.sort((a, b) => {
            if (order === 'asc') {
                return a[property] - b[property];
            } else {
                return b[property] - a[property];
            }
        });
    }
}