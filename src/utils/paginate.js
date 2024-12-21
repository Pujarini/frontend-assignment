export const paginate = (data, currentPage) => {
    const startIndex = (currentPage - 1) * 5;
    const endIndex = startIndex + 5;
    return data.slice(startIndex, endIndex);
};