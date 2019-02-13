export const GetErrorsInDetail = (errors: any): string[] => {
    if (errors === undefined) { return []; }
    const messages: string[] = [];
    let index = 0;
    for (const key in errors) {
        if (errors.hasOwnProperty(key)) {
            const message = errors[key].message;
            messages.push(`         ${++index}) ${key} : \n                 ${message}`);
        }
    }
    return messages;
};

export const GetErrorsAsString = (errors: any) => {
    return GetErrorsInDetail(errors).join('\n');
};
