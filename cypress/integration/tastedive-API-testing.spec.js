//JavaScript method to load data file with require feature
const user = require("../fixtures/userData.json");

describe('Given TasteDive API testing', () => {
    //GET test without parameters
    context('When a user send GET request to tastedive api/similar without parameters', () => {
        it('then it should get tastedive query without parameters and print response', () => {
            //using custom command getTastediveRecommendation
            cy.getTastediveRecommendation().then(response => {
                //print response
                cy.log(JSON.stringify(response));
                //expect code 200
                expect(response.status).to.eq(200);
                //expect property Similar
                expect(response.body).to.have.property('Similar');
                //expect 0 as results lenght 
                expect(response.body.Similar.Results.length).to.be.eq(0);
                //expect empty name as results
                expect(response.body.Similar.Info[0].Name).to.be.eq("");
            })
        })   
    });
    //GET test with parameters
    context('When a user send GET request to tastedive api/similar with parameters', () => {
        it('then it should get tastedive query with parameters and print response', () => {
            //using custom command getTastediveRecommendation
            cy.getTastediveRecommendation('stargate', 1, 'movies', 2).then(response => {
                //print response
                cy.log(JSON.stringify(response));
                //expect code 200
                expect(response.status).to.eq(200);
                //expect property Similar
                expect(response.body).to.have.property('Similar');
                //expect 2 as results lenght 
                expect(response.body.Similar.Results.length).to.be.eq(2);
                //expect "Stargate" as results
                expect(response.body.Similar.Info[0].Name).to.be.eq("Stargate");
            })
        })
    });
    //GET test with json file as command parameters
    context('When a user send GET request to tastedive api/similar with fixtured parameters', () => {
        it('then it should get tastedive first indexed fixtured query and print response', () => {
            //using custom command getTastediveRecommendation
            cy.getTastediveRecommendation(user[0].searchQuery, user[0].additionalInfo, user[0].OptionalQueryType, user[0].OptionalMaxNumberToRetrieve).then(response => {
                //print response
                cy.log(JSON.stringify(response));
                //expect code 200
                expect(response.status).to.eq(200);
                //expect property Similar
                expect(response.body).to.have.property('Similar');
                //expect 2 as results lenght 
                expect(response.body.Similar.Results.length).to.be.eq(2);
                //expect "Batman" as results
                expect(response.body.Similar.Info[0].Name).to.be.eq("Batman");
            })
        })
    });
    //GET another test with json file as parameters
    context('When a user send another GET request to tastedive api/similar with fixtured parameters', () => {
        it('then it should get tastedive second indexed fixtured query and print response', () => {
            //using custom command getTastediveRecommendation
            cy.getTastediveRecommendation(user[1].searchQuery, user[1].additionalInfo, user[1].OptionalQueryType, user[1].OptionalMaxNumberToRetrieve).then(response => {
                //print response                
                cy.log(JSON.stringify(response));
                //expect code 200
                expect(response.status).to.eq(200);
                //expect property Similar
                expect(response.body).to.have.property('Similar');
                //expect 0 as results lenght 
                expect(response.body.Similar.Results.length).to.be.eq(0);
                //expect "South Park" as results
                expect(response.body.Similar.Info[0].Name).to.be.eq("South Park");
            })
        })
    });
});