import { Page } from "@playwright/test";
import { BasePage } from "../base.page";
import { HeaderComponent } from "./header.component";

export class HomePage extends BasePage {
    readonly headerComponent: HeaderComponent

    constructor(page: Page) {
        super(page)
        this.headerComponent = new HeaderComponent(this.page.locator('.nav'))
    }

    async open(): Promise<void> {
        await this.navigate('/');
    }
}
