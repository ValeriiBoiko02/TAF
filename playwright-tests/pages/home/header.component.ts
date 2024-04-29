import { Locator } from "@playwright/test";
import { BaseComponent } from "../base.component";

export class HeaderComponent extends BaseComponent {
    private readonly logoElement: Locator
    private readonly homeButton: Locator
    private readonly projectsButton: Locator
    private readonly contactsButton: Locator

    constructor(container: Locator) {
        super(container)
        this.logoElement = this.container.locator('.logo')
        this.homeButton = this.container.getByRole('link', { name: 'Home' })
        this.projectsButton = this.container.getByRole('link', { name: 'Projects' })
        this.contactsButton = this.container.getByRole('link', { name: 'Contacts' })
    }

    async isLogoVisible(): Promise<boolean> {
        return this.isElementVisible(this.logoElement)
    }
    async isHomeButtonVisible(): Promise<boolean> {
        return this.isElementVisible(this.homeButton)
    }
    async isProjectsButtonVisible(): Promise<boolean> {
        return this.isElementVisible(this.projectsButton)
    }
    async isContactsButtonVisible(): Promise<boolean> {
        return this.isElementVisible(this.contactsButton)
    }
}
