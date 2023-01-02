import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  blockAboutCollection?: Maybe<BlockAboutCollection>;
  blockImageCollection?: Maybe<BlockImageCollection>;
  blockServicesCollection?: Maybe<BlockServicesCollection>;
  elmTimelineCollection?: Maybe<ElmTimelineCollection>;
  entryCollection?: Maybe<EntryCollection>;
  projectCollection?: Maybe<ProjectCollection>;
  servicesCollection?: Maybe<ServicesCollection>;
  sharedSeoCollection?: Maybe<SharedSeoCollection>;
};


export type AssetLinkingCollectionsBlockAboutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsBlockImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsBlockServicesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsElmTimelineCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsServicesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsSharedSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/blockAbout) */
export type BlockAbout = Entry & {
  __typename?: 'BlockAbout';
  about?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<BlockAboutLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  subheading?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/blockAbout) */
export type BlockAboutAboutArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/blockAbout) */
export type BlockAboutImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/blockAbout) */
export type BlockAboutLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/blockAbout) */
export type BlockAboutNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/blockAbout) */
export type BlockAboutSubheadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/blockAbout) */
export type BlockAboutTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type BlockAboutCollection = {
  __typename?: 'BlockAboutCollection';
  items: Array<Maybe<BlockAbout>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type BlockAboutFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlockAboutFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlockAboutFilter>>>;
  about?: InputMaybe<Scalars['String']>;
  about_contains?: InputMaybe<Scalars['String']>;
  about_exists?: InputMaybe<Scalars['Boolean']>;
  about_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  about_not?: InputMaybe<Scalars['String']>;
  about_not_contains?: InputMaybe<Scalars['String']>;
  about_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subheading?: InputMaybe<Scalars['String']>;
  subheading_contains?: InputMaybe<Scalars['String']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subheading_not?: InputMaybe<Scalars['String']>;
  subheading_not_contains?: InputMaybe<Scalars['String']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockAboutLinkingCollections = {
  __typename?: 'BlockAboutLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageHomeCollection?: Maybe<PageHomeCollection>;
  projectCollection?: Maybe<ProjectCollection>;
};


export type BlockAboutLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type BlockAboutLinkingCollectionsPageHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type BlockAboutLinkingCollectionsProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum BlockAboutOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/blockImage) */
export type BlockImage = Entry & {
  __typename?: 'BlockImage';
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<BlockImageLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/blockImage) */
export type BlockImageImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/blockImage) */
export type BlockImageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockImageCollection = {
  __typename?: 'BlockImageCollection';
  items: Array<Maybe<BlockImage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type BlockImageFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlockImageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlockImageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type BlockImageLinkingCollections = {
  __typename?: 'BlockImageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageHomeCollection?: Maybe<PageHomeCollection>;
  projectCollection?: Maybe<ProjectCollection>;
};


export type BlockImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type BlockImageLinkingCollectionsPageHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type BlockImageLinkingCollectionsProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum BlockImageOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/blockProjectsSection) */
export type BlockProjectsSection = Entry & {
  __typename?: 'BlockProjectsSection';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<BlockProjectsSectionLinkingCollections>;
  projectsCollection?: Maybe<BlockProjectsSectionProjectsCollection>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/blockProjectsSection) */
export type BlockProjectsSectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/blockProjectsSection) */
export type BlockProjectsSectionProjectsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/blockProjectsSection) */
export type BlockProjectsSectionTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type BlockProjectsSectionCollection = {
  __typename?: 'BlockProjectsSectionCollection';
  items: Array<Maybe<BlockProjectsSection>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type BlockProjectsSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlockProjectsSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlockProjectsSectionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  projectsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockProjectsSectionLinkingCollections = {
  __typename?: 'BlockProjectsSectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageHomeCollection?: Maybe<PageHomeCollection>;
  projectCollection?: Maybe<ProjectCollection>;
};


export type BlockProjectsSectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type BlockProjectsSectionLinkingCollectionsPageHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type BlockProjectsSectionLinkingCollectionsProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum BlockProjectsSectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type BlockProjectsSectionProjectsCollection = {
  __typename?: 'BlockProjectsSectionProjectsCollection';
  items: Array<Maybe<Project>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/blockServices) */
export type BlockServices = Entry & {
  __typename?: 'BlockServices';
  contentfulMetadata: ContentfulMetadata;
  imageCollection?: Maybe<AssetCollection>;
  linkedFrom?: Maybe<BlockServicesLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/blockServices) */
export type BlockServicesImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/blockServices) */
export type BlockServicesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/blockServices) */
export type BlockServicesTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type BlockServicesCollection = {
  __typename?: 'BlockServicesCollection';
  items: Array<Maybe<BlockServices>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type BlockServicesFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlockServicesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlockServicesFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imageCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockServicesLinkingCollections = {
  __typename?: 'BlockServicesLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageHomeCollection?: Maybe<PageHomeCollection>;
  projectCollection?: Maybe<ProjectCollection>;
};


export type BlockServicesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type BlockServicesLinkingCollectionsPageHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type BlockServicesLinkingCollectionsProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum BlockServicesOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/blockTimeline) */
export type BlockTimeline = Entry & {
  __typename?: 'BlockTimeline';
  contentfulMetadata: ContentfulMetadata;
  enitriesCollection?: Maybe<BlockTimelineEnitriesCollection>;
  linkedFrom?: Maybe<BlockTimelineLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/blockTimeline) */
export type BlockTimelineEnitriesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/blockTimeline) */
export type BlockTimelineLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/blockTimeline) */
export type BlockTimelineTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type BlockTimelineCollection = {
  __typename?: 'BlockTimelineCollection';
  items: Array<Maybe<BlockTimeline>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type BlockTimelineEnitriesCollection = {
  __typename?: 'BlockTimelineEnitriesCollection';
  items: Array<Maybe<ElmTimeline>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type BlockTimelineFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlockTimelineFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlockTimelineFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  enitriesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockTimelineLinkingCollections = {
  __typename?: 'BlockTimelineLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageHomeCollection?: Maybe<PageHomeCollection>;
};


export type BlockTimelineLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type BlockTimelineLinkingCollectionsPageHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum BlockTimelineOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/elmTimeline) */
export type ElmTimeline = Entry & {
  __typename?: 'ElmTimeline';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fromDate?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<ElmTimelineLinkingCollections>;
  overwriteToDateWithNow?: Maybe<Scalars['Boolean']>;
  subHeading?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  toDate?: Maybe<Scalars['DateTime']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/elmTimeline) */
export type ElmTimelineDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/elmTimeline) */
export type ElmTimelineFromDateArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/elmTimeline) */
export type ElmTimelineImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/elmTimeline) */
export type ElmTimelineLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/elmTimeline) */
export type ElmTimelineOverwriteToDateWithNowArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/elmTimeline) */
export type ElmTimelineSubHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/elmTimeline) */
export type ElmTimelineTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/elmTimeline) */
export type ElmTimelineToDateArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ElmTimelineCollection = {
  __typename?: 'ElmTimelineCollection';
  items: Array<Maybe<ElmTimeline>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ElmTimelineFilter = {
  AND?: InputMaybe<Array<InputMaybe<ElmTimelineFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ElmTimelineFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fromDate?: InputMaybe<Scalars['DateTime']>;
  fromDate_exists?: InputMaybe<Scalars['Boolean']>;
  fromDate_gt?: InputMaybe<Scalars['DateTime']>;
  fromDate_gte?: InputMaybe<Scalars['DateTime']>;
  fromDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  fromDate_lt?: InputMaybe<Scalars['DateTime']>;
  fromDate_lte?: InputMaybe<Scalars['DateTime']>;
  fromDate_not?: InputMaybe<Scalars['DateTime']>;
  fromDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  overwriteToDateWithNow?: InputMaybe<Scalars['Boolean']>;
  overwriteToDateWithNow_exists?: InputMaybe<Scalars['Boolean']>;
  overwriteToDateWithNow_not?: InputMaybe<Scalars['Boolean']>;
  subHeading?: InputMaybe<Scalars['String']>;
  subHeading_contains?: InputMaybe<Scalars['String']>;
  subHeading_exists?: InputMaybe<Scalars['Boolean']>;
  subHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subHeading_not?: InputMaybe<Scalars['String']>;
  subHeading_not_contains?: InputMaybe<Scalars['String']>;
  subHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  toDate?: InputMaybe<Scalars['DateTime']>;
  toDate_exists?: InputMaybe<Scalars['Boolean']>;
  toDate_gt?: InputMaybe<Scalars['DateTime']>;
  toDate_gte?: InputMaybe<Scalars['DateTime']>;
  toDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  toDate_lt?: InputMaybe<Scalars['DateTime']>;
  toDate_lte?: InputMaybe<Scalars['DateTime']>;
  toDate_not?: InputMaybe<Scalars['DateTime']>;
  toDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type ElmTimelineLinkingCollections = {
  __typename?: 'ElmTimelineLinkingCollections';
  blockTimelineCollection?: Maybe<BlockTimelineCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type ElmTimelineLinkingCollectionsBlockTimelineCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ElmTimelineLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ElmTimelineOrder {
  FromDateAsc = 'fromDate_ASC',
  FromDateDesc = 'fromDate_DESC',
  OverwriteToDateWithNowAsc = 'overwriteToDateWithNow_ASC',
  OverwriteToDateWithNowDesc = 'overwriteToDateWithNow_DESC',
  SubHeadingAsc = 'subHeading_ASC',
  SubHeadingDesc = 'subHeading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  ToDateAsc = 'toDate_ASC',
  ToDateDesc = 'toDate_DESC'
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/pageHome) */
export type PageHome = Entry & {
  __typename?: 'PageHome';
  contentAreaCollection?: Maybe<PageHomeContentAreaCollection>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageHomeLinkingCollections>;
  seo?: Maybe<SharedSeo>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/pageHome) */
export type PageHomeContentAreaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/pageHome) */
export type PageHomeLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/pageHome) */
export type PageHomeSeoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type PageHomeCollection = {
  __typename?: 'PageHomeCollection';
  items: Array<Maybe<PageHome>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageHomeContentAreaCollection = {
  __typename?: 'PageHomeContentAreaCollection';
  items: Array<Maybe<PageHomeContentAreaItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageHomeContentAreaItem = BlockAbout | BlockImage | BlockProjectsSection | BlockServices | BlockTimeline;

export type PageHomeFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageHomeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageHomeFilter>>>;
  contentAreaCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  seo?: InputMaybe<CfSharedSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type PageHomeLinkingCollections = {
  __typename?: 'PageHomeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageHomeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageHomeOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/project) */
export type Project = Entry & {
  __typename?: 'Project';
  contentAreaCollection?: Maybe<ProjectContentAreaCollection>;
  contentfulMetadata: ContentfulMetadata;
  headerImage?: Maybe<Asset>;
  linkedFrom?: Maybe<ProjectLinkingCollections>;
  seo?: Maybe<SharedSeo>;
  solutions?: Maybe<Array<Maybe<Scalars['String']>>>;
  sys: Sys;
  teaserImage?: Maybe<Asset>;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/project) */
export type ProjectContentAreaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/project) */
export type ProjectHeaderImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/project) */
export type ProjectLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/project) */
export type ProjectSeoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/project) */
export type ProjectSolutionsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/project) */
export type ProjectTeaserImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/project) */
export type ProjectTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ProjectCollection = {
  __typename?: 'ProjectCollection';
  items: Array<Maybe<Project>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ProjectContentAreaCollection = {
  __typename?: 'ProjectContentAreaCollection';
  items: Array<Maybe<ProjectContentAreaItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ProjectContentAreaItem = BlockAbout | BlockImage | BlockProjectsSection | BlockServices;

export type ProjectFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectFilter>>>;
  contentAreaCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headerImage_exists?: InputMaybe<Scalars['Boolean']>;
  seo?: InputMaybe<CfSharedSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']>;
  solutions_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  solutions_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  solutions_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  solutions_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  teaserImage_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ProjectLinkingCollections = {
  __typename?: 'ProjectLinkingCollections';
  blockProjectsSectionCollection?: Maybe<BlockProjectsSectionCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type ProjectLinkingCollectionsBlockProjectsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ProjectLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ProjectOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  blockAbout?: Maybe<BlockAbout>;
  blockAboutCollection?: Maybe<BlockAboutCollection>;
  blockImage?: Maybe<BlockImage>;
  blockImageCollection?: Maybe<BlockImageCollection>;
  blockProjectsSection?: Maybe<BlockProjectsSection>;
  blockProjectsSectionCollection?: Maybe<BlockProjectsSectionCollection>;
  blockServices?: Maybe<BlockServices>;
  blockServicesCollection?: Maybe<BlockServicesCollection>;
  blockTimeline?: Maybe<BlockTimeline>;
  blockTimelineCollection?: Maybe<BlockTimelineCollection>;
  elmTimeline?: Maybe<ElmTimeline>;
  elmTimelineCollection?: Maybe<ElmTimelineCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageHome?: Maybe<PageHome>;
  pageHomeCollection?: Maybe<PageHomeCollection>;
  project?: Maybe<Project>;
  projectCollection?: Maybe<ProjectCollection>;
  services?: Maybe<Services>;
  servicesCollection?: Maybe<ServicesCollection>;
  sharedSeo?: Maybe<SharedSeo>;
  sharedSeoCollection?: Maybe<SharedSeoCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryBlockAboutArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryBlockAboutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<BlockAboutOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlockAboutFilter>;
};


export type QueryBlockImageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryBlockImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<BlockImageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlockImageFilter>;
};


export type QueryBlockProjectsSectionArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryBlockProjectsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<BlockProjectsSectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlockProjectsSectionFilter>;
};


export type QueryBlockServicesArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryBlockServicesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<BlockServicesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlockServicesFilter>;
};


export type QueryBlockTimelineArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryBlockTimelineCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<BlockTimelineOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlockTimelineFilter>;
};


export type QueryElmTimelineArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryElmTimelineCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ElmTimelineOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ElmTimelineFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryPageHomeArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageHomeOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageHomeFilter>;
};


export type QueryProjectArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ProjectOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectFilter>;
};


export type QueryServicesArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryServicesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ServicesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ServicesFilter>;
};


export type QuerySharedSeoArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySharedSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SharedSeoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SharedSeoFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/services) */
export type Services = Entry & {
  __typename?: 'Services';
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<ServicesLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/services) */
export type ServicesImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/services) */
export type ServicesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/services) */
export type ServicesTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ServicesCollection = {
  __typename?: 'ServicesCollection';
  items: Array<Maybe<Services>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ServicesFilter = {
  AND?: InputMaybe<Array<InputMaybe<ServicesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ServicesFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ServicesLinkingCollections = {
  __typename?: 'ServicesLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ServicesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ServicesOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/sharedSeo) */
export type SharedSeo = Entry & {
  __typename?: 'SharedSeo';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<SharedSeoLinkingCollections>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/sharedSeo) */
export type SharedSeoDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/sharedSeo) */
export type SharedSeoImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/sharedSeo) */
export type SharedSeoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/sharedSeo) */
export type SharedSeoSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fyc30pkhu1hr/content_types/sharedSeo) */
export type SharedSeoTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SharedSeoCollection = {
  __typename?: 'SharedSeoCollection';
  items: Array<Maybe<SharedSeo>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SharedSeoFilter = {
  AND?: InputMaybe<Array<InputMaybe<SharedSeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SharedSeoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SharedSeoLinkingCollections = {
  __typename?: 'SharedSeoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageHomeCollection?: Maybe<PageHomeCollection>;
  projectCollection?: Maybe<ProjectCollection>;
};


export type SharedSeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SharedSeoLinkingCollectionsPageHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SharedSeoLinkingCollectionsProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SharedSeoOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type CfSharedSeoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSharedSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSharedSeoNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageHomeQueryVariables = Exact<{ [key: string]: never; }>;


export type PageHomeQuery = { __typename?: 'Query', pageHomeCollection?: { __typename?: 'PageHomeCollection', items: Array<{ __typename?: 'PageHome', contentAreaCollection?: { __typename?: 'PageHomeContentAreaCollection', items: Array<{ __typename: 'BlockAbout', about?: string | null, name?: string | null, subheading?: string | null, title?: string | null, image?: { __typename?: 'Asset', contentType?: string | null, width?: number | null, description?: string | null, url?: string | null, title?: string | null, size?: number | null, height?: number | null } | null } | { __typename: 'BlockImage', image?: { __typename?: 'Asset', contentType?: string | null, width?: number | null, description?: string | null, url?: string | null, title?: string | null, size?: number | null, height?: number | null } | null } | { __typename: 'BlockProjectsSection', title?: string | null, projectsCollection?: { __typename?: 'BlockProjectsSectionProjectsCollection', items: Array<{ __typename?: 'Project', title?: string | null, solutions?: Array<string | null> | null, teaserImage?: { __typename?: 'Asset', contentType?: string | null, width?: number | null, description?: string | null, url?: string | null, title?: string | null, size?: number | null, height?: number | null } | null, seo?: { __typename?: 'SharedSeo', slug?: string | null } | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | { __typename: 'BlockServices', title?: string | null, imageCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', contentType?: string | null, width?: number | null, description?: string | null, url?: string | null, title?: string | null, size?: number | null, height?: number | null } | null> } | null } | { __typename: 'BlockTimeline', title?: string | null, enitriesCollection?: { __typename?: 'BlockTimelineEnitriesCollection', items: Array<{ __typename?: 'ElmTimeline', description?: string | null, fromDate?: any | null, toDate?: any | null, title?: string | null, overwriteToDateWithNow?: boolean | null, subHeading?: string | null, image?: { __typename?: 'Asset', contentType?: string | null, width?: number | null, description?: string | null, url?: string | null, title?: string | null, size?: number | null, height?: number | null } | null } | null> } | null } | null> } | null } | null> } | null };

export type PageProjectQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type PageProjectQuery = { __typename?: 'Query', projectCollection?: { __typename?: 'ProjectCollection', items: Array<{ __typename?: 'Project', title?: string | null, solutions?: Array<string | null> | null, headerImage?: { __typename?: 'Asset', contentType?: string | null, width?: number | null, description?: string | null, url?: string | null, title?: string | null, size?: number | null, height?: number | null } | null, seo?: { __typename?: 'SharedSeo', slug?: string | null, description?: string | null, image?: { __typename?: 'Asset', contentType?: string | null, width?: number | null, description?: string | null, url?: string | null, title?: string | null, size?: number | null, height?: number | null } | null } | null, contentAreaCollection?: { __typename?: 'ProjectContentAreaCollection', items: Array<{ __typename: 'BlockAbout', about?: string | null, name?: string | null, subheading?: string | null, title?: string | null, image?: { __typename?: 'Asset', contentType?: string | null, width?: number | null, description?: string | null, url?: string | null, title?: string | null, size?: number | null, height?: number | null } | null } | { __typename: 'BlockImage', image?: { __typename?: 'Asset', contentType?: string | null, width?: number | null, description?: string | null, url?: string | null, title?: string | null, size?: number | null, height?: number | null } | null } | { __typename: 'BlockProjectsSection', title?: string | null, projectsCollection?: { __typename?: 'BlockProjectsSectionProjectsCollection', items: Array<{ __typename?: 'Project', title?: string | null, solutions?: Array<string | null> | null, teaserImage?: { __typename?: 'Asset', contentType?: string | null, width?: number | null, description?: string | null, url?: string | null, title?: string | null, size?: number | null, height?: number | null } | null, seo?: { __typename?: 'SharedSeo', slug?: string | null } | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | { __typename: 'BlockServices', title?: string | null, imageCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', contentType?: string | null, width?: number | null, description?: string | null, url?: string | null, title?: string | null, size?: number | null, height?: number | null } | null> } | null } | null> } | null } | null> } | null };

export type BlockAboutFragment = { __typename: 'BlockAbout', about?: string | null, name?: string | null, subheading?: string | null, title?: string | null, image?: { __typename?: 'Asset', contentType?: string | null, width?: number | null, description?: string | null, url?: string | null, title?: string | null, size?: number | null, height?: number | null } | null };

export type BlockImageFragment = { __typename: 'BlockImage', image?: { __typename?: 'Asset', contentType?: string | null, width?: number | null, description?: string | null, url?: string | null, title?: string | null, size?: number | null, height?: number | null } | null };

export type BlockProjectsSectionFragment = { __typename: 'BlockProjectsSection', title?: string | null, projectsCollection?: { __typename?: 'BlockProjectsSectionProjectsCollection', items: Array<{ __typename?: 'Project', title?: string | null, solutions?: Array<string | null> | null, teaserImage?: { __typename?: 'Asset', contentType?: string | null, width?: number | null, description?: string | null, url?: string | null, title?: string | null, size?: number | null, height?: number | null } | null, seo?: { __typename?: 'SharedSeo', slug?: string | null } | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type BlockServicesFragment = { __typename: 'BlockServices', title?: string | null, imageCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', contentType?: string | null, width?: number | null, description?: string | null, url?: string | null, title?: string | null, size?: number | null, height?: number | null } | null> } | null };

export type BlockTimelineFragment = { __typename: 'BlockTimeline', title?: string | null, enitriesCollection?: { __typename?: 'BlockTimelineEnitriesCollection', items: Array<{ __typename?: 'ElmTimeline', description?: string | null, fromDate?: any | null, toDate?: any | null, title?: string | null, overwriteToDateWithNow?: boolean | null, subHeading?: string | null, image?: { __typename?: 'Asset', contentType?: string | null, width?: number | null, description?: string | null, url?: string | null, title?: string | null, size?: number | null, height?: number | null } | null } | null> } | null };

export type ContentfullImageFragment = { __typename?: 'Asset', contentType?: string | null, width?: number | null, description?: string | null, url?: string | null, title?: string | null, size?: number | null, height?: number | null };

export const ContentfullImageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"contentfullImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]} as unknown as DocumentNode<ContentfullImageFragment, unknown>;
export const BlockAboutFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"blockAbout"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlockAbout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"subheading"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"contentfullImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<BlockAboutFragment, unknown>;
export const BlockImageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"blockImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlockImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"contentfullImage"}}]}}]}}]} as unknown as DocumentNode<BlockImageFragment, unknown>;
export const BlockProjectsSectionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"blockProjectsSection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlockProjectsSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"3"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"teaserImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"contentfullImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"solutions"}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<BlockProjectsSectionFragment, unknown>;
export const BlockServicesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"blockServices"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlockServices"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"imageCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"40"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"contentfullImage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<BlockServicesFragment, unknown>;
export const BlockTimelineFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"blockTimeline"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlockTimeline"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"enitriesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"40"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"fromDate"}},{"kind":"Field","name":{"kind":"Name","value":"toDate"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"contentfullImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"overwriteToDateWithNow"}},{"kind":"Field","name":{"kind":"Name","value":"subHeading"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<BlockTimelineFragment, unknown>;
export const PageHomeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"pageHome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageHomeCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentAreaCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"blockAbout"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"blockImage"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"blockProjectsSection"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"blockServices"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"blockTimeline"}}]}}]}}]}}]}}]}},...BlockAboutFragmentDoc.definitions,...ContentfullImageFragmentDoc.definitions,...BlockImageFragmentDoc.definitions,...BlockProjectsSectionFragmentDoc.definitions,...BlockServicesFragmentDoc.definitions,...BlockTimelineFragmentDoc.definitions]} as unknown as DocumentNode<PageHomeQuery, PageHomeQueryVariables>;
export const PageProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"pageProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"seo"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"solutions"}},{"kind":"Field","name":{"kind":"Name","value":"headerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"contentfullImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"contentfullImage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"headerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"contentfullImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentAreaCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"40"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"blockAbout"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"blockImage"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"blockProjectsSection"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"blockServices"}}]}}]}}]}}]}}]}},...ContentfullImageFragmentDoc.definitions,...BlockAboutFragmentDoc.definitions,...BlockImageFragmentDoc.definitions,...BlockProjectsSectionFragmentDoc.definitions,...BlockServicesFragmentDoc.definitions]} as unknown as DocumentNode<PageProjectQuery, PageProjectQueryVariables>;