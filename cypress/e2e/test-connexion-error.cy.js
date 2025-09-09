// describe('test-user', () => {
//   it('connexion user valide', () => {
//     // Arrange (config)
//     cy.visit('http://127.0.0.1:8001/user/connexion')
//     const message = "Les informations de connexion ne sont pas correctes"

//     // Act (scénario)
//     cy.get('[name="email"]').type("test6@test.com")
//     cy.get('[name="password"]').type("1")
//     cy.get('[name="submit"]').click()

//     cy.wait(500)

//     // Assert (vérification)
//     cy.get(".error").contains(message)
//   })
// })