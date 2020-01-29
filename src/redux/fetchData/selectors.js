export const selectAllData = state => state.allData.list.map(items => ({
    results: items.results
})).flatMap(items => items.results)
