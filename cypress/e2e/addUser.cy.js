describe('test-user', () => {
  it('register user valide', () => {
    // Arrange (config)
    cy.visit('http://127.0.0.1:8001/register')
    const message = "Le compte : mathieu.mith@laposte.net a été ajouté en BDD"

    // Act (scénario)
    cy.get('[name="firstname"]').type("Mathieu")
    cy.get('[name="lastname"]').type("Mith")
    cy.get('[name="email"]').type("mathieu.mith@laposte.net")
    cy.get('[name="password"]').type("1234")
    cy.get('[name="submit"]').click()

    // Assert (vérification)
    cy.get(".error").contains(message)
  })

  it('register user doublon', () => {
    // Arrange (config)
    cy.visit('http://127.0.0.1:8001/register')
    const message = "Le compte existe déja"

    // Act (scénario)
    cy.get('[name="firstname"]').type("Mathieu")
    cy.get('[name="lastname"]').type("Mith")
    cy.get('[name="email"]').type("mathieu.mith@laposte.net")
    cy.get('[name="password"]').type("1234")
    cy.get('[name="submit"]').click()

    // Assert (vérification)
    cy.get(".error").contains(message)
    })
})

