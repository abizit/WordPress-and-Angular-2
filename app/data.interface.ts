export interface Guid {
    rendered: string;
}

export interface Title {
    rendered: string;
}

export interface Content {
    rendered: string;
}

export interface Excerpt {
    rendered: string;
}

export interface Self {
    href: string;
}

export interface Collection {
    href: string;
}

export interface About {
    href: string;
}

export interface Author {
    embeddable: boolean;
    href: string;
}

export interface Reply {
    embeddable: boolean;
    href: string;
}

export interface VersionHistory {
    href: string;
}

export interface HttpsApiWOrgAttachment {
    href: string;
}

export interface HttpsApiWOrgTerm {
    taxonomy: string;
    embeddable: boolean;
    href: string;
}

export interface HttpsApiWOrgMeta {
    embeddable: boolean;
    href: string;
}

export interface Links {
    self: Self[];
    collection: Collection[];
    about: About[];
    author: Author[];
    replies: Reply[];
    versionhistory: VersionHistory[];
    attachment: HttpsApiWOrgAttachment[];
    term: HttpsApiWOrgTerm[];
    meta: HttpsApiWOrgMeta[];
}

export interface PostInterface {
    id: number;
    date: Date;
    date_gmt: Date;
    guid: Guid;
    modified: Date;
    modified_gmt: Date;
    slug: string;
    type: string;
    link: string;
    title: Title;
    content: Content;
    excerpt: Excerpt;
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    format: string;
    categories: number[];
    tags: any[];
    _links: Links;
}



