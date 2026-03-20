export const createFormData = (data = {}) => {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
        const value = data[key];

        if (value === null || value === undefined) return;

        // handle array
        if (Array.isArray(value)) {
            value.forEach((item, index) => {
                formData.append(`${key}[${index}]`, item);
            });
        }
        // handle file
        else if (value instanceof File) {
            formData.append(key, value);
        }
        // handle object
        else if (typeof value === "object") {
            formData.append(key, JSON.stringify(value));
        }
        // normal
        else {
            formData.append(key, value);
        }
    });

    return formData;
};