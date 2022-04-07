Cypress.Commands.add('getTastediveRecommendation', (searchQuery, additionalInfo, OptionalQueryType, OptionalMaxNumberToRetrieve) => {
    cy.request({
        url: 'https://tastedive.com/api/similar',
        qs: {
            q: searchQuery,
            info: additionalInfo,
            type: OptionalQueryType,
            limit: OptionalMaxNumberToRetrieve
        }
    }) 
}) 
