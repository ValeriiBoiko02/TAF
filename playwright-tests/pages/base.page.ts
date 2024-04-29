import { Page } from "@playwright/test";

export class BasePage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    protected async navigate(url: string): Promise<void> {
        await this.page.goto(url);
    }
}