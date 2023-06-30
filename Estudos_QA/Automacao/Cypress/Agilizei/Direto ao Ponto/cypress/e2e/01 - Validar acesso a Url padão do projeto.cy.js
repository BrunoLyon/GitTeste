import { doVisit } from "./library/functions/doVisit"

describe('Validar Home Page', () =>
{
	it('01 - Validar acesso a Url padrão do projeto', () =>
	{
		doVisit();
	})

	it('02 - Validar visualização do menu superior', () =>
	{
		doVisit();
		cy.get('#nav-logo > a')
			.should("be.visible")
			.and("contain.html", "a")
			.and("have.css", "color", "rgb(0, 113, 133)")	
			
		cy.get('#nav-logo > a')
			.should("be.visible")
			.should("contain.html", "a")
			.should("have.css", "color", "rgb(0, 113, 133)")	
	})

	it.only('03 - Validar texto do logotipo ', () => 
	{
		doVisit();
		cy.get('#nav-logo > a > .nav-logo-locale')
			.should("be.visible")
			//.and("have.text", "com.br")
			.contains(".com")
			.and("have.css", "color", "rgb(255, 255, 255)")
	});
})