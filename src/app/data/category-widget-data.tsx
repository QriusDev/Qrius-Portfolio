export default class CategoryWidgetData {
    title: string = "";
    description: string = "";
    link: string = "";
    imageSource: string | undefined = undefined;

    constructor(title: string, description: string, link: string, displayImage: string | undefined)
    {
        this.title = title;
        this.description = description;
        this.link = link;
        this.imageSource = displayImage;
    }
}