export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContentfulAddress = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  name2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  information?: Maybe<Array<Maybe<ContentfulInformation>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulAddressSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulAddressCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAddressUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulAddressConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAddressEdge>;
  nodes: Array<ContentfulAddress>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAddressGroupConnection>;
};


export type ContentfulAddressConnectionDistinctArgs = {
  field: ContentfulAddressFieldsEnum;
};


export type ContentfulAddressConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAddressFieldsEnum;
};

export type ContentfulAddressEdge = {
  next?: Maybe<ContentfulAddress>;
  node: ContentfulAddress;
  previous?: Maybe<ContentfulAddress>;
};

export type ContentfulAddressFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'name'
  | 'name2'
  | 'city'
  | 'country'
  | 'code'
  | 'information'
  | 'information___contentful_id'
  | 'information___id'
  | 'information___node_locale'
  | 'information___name'
  | 'information___shortName'
  | 'information___email'
  | 'information___mobile'
  | 'information___birthday'
  | 'information___definition'
  | 'information___summary___raw'
  | 'information___contentfulid'
  | 'information___images'
  | 'information___images___contentful_id'
  | 'information___images___id'
  | 'information___images___spaceId'
  | 'information___images___createdAt'
  | 'information___images___updatedAt'
  | 'information___images___file___url'
  | 'information___images___file___fileName'
  | 'information___images___file___contentType'
  | 'information___images___title'
  | 'information___images___description'
  | 'information___images___node_locale'
  | 'information___images___sys___type'
  | 'information___images___sys___revision'
  | 'information___images___localFile___sourceInstanceName'
  | 'information___images___localFile___absolutePath'
  | 'information___images___localFile___relativePath'
  | 'information___images___localFile___extension'
  | 'information___images___localFile___size'
  | 'information___images___localFile___prettySize'
  | 'information___images___localFile___modifiedTime'
  | 'information___images___localFile___accessTime'
  | 'information___images___localFile___changeTime'
  | 'information___images___localFile___birthTime'
  | 'information___images___localFile___root'
  | 'information___images___localFile___dir'
  | 'information___images___localFile___base'
  | 'information___images___localFile___ext'
  | 'information___images___localFile___name'
  | 'information___images___localFile___relativeDirectory'
  | 'information___images___localFile___dev'
  | 'information___images___localFile___mode'
  | 'information___images___localFile___nlink'
  | 'information___images___localFile___uid'
  | 'information___images___localFile___gid'
  | 'information___images___localFile___rdev'
  | 'information___images___localFile___ino'
  | 'information___images___localFile___atimeMs'
  | 'information___images___localFile___mtimeMs'
  | 'information___images___localFile___ctimeMs'
  | 'information___images___localFile___atime'
  | 'information___images___localFile___mtime'
  | 'information___images___localFile___ctime'
  | 'information___images___localFile___birthtime'
  | 'information___images___localFile___birthtimeMs'
  | 'information___images___localFile___blksize'
  | 'information___images___localFile___blocks'
  | 'information___images___localFile___url'
  | 'information___images___localFile___publicURL'
  | 'information___images___localFile___id'
  | 'information___images___localFile___children'
  | 'information___images___fixed___base64'
  | 'information___images___fixed___tracedSVG'
  | 'information___images___fixed___aspectRatio'
  | 'information___images___fixed___width'
  | 'information___images___fixed___height'
  | 'information___images___fixed___src'
  | 'information___images___fixed___srcSet'
  | 'information___images___fixed___srcWebp'
  | 'information___images___fixed___srcSetWebp'
  | 'information___images___resolutions___base64'
  | 'information___images___resolutions___tracedSVG'
  | 'information___images___resolutions___aspectRatio'
  | 'information___images___resolutions___width'
  | 'information___images___resolutions___height'
  | 'information___images___resolutions___src'
  | 'information___images___resolutions___srcSet'
  | 'information___images___resolutions___srcWebp'
  | 'information___images___resolutions___srcSetWebp'
  | 'information___images___fluid___base64'
  | 'information___images___fluid___tracedSVG'
  | 'information___images___fluid___aspectRatio'
  | 'information___images___fluid___src'
  | 'information___images___fluid___srcSet'
  | 'information___images___fluid___srcWebp'
  | 'information___images___fluid___srcSetWebp'
  | 'information___images___fluid___sizes'
  | 'information___images___sizes___base64'
  | 'information___images___sizes___tracedSVG'
  | 'information___images___sizes___aspectRatio'
  | 'information___images___sizes___src'
  | 'information___images___sizes___srcSet'
  | 'information___images___sizes___srcWebp'
  | 'information___images___sizes___srcSetWebp'
  | 'information___images___sizes___sizes'
  | 'information___images___resize___base64'
  | 'information___images___resize___tracedSVG'
  | 'information___images___resize___src'
  | 'information___images___resize___width'
  | 'information___images___resize___height'
  | 'information___images___resize___aspectRatio'
  | 'information___images___parent___id'
  | 'information___images___parent___children'
  | 'information___images___children'
  | 'information___images___children___id'
  | 'information___images___children___children'
  | 'information___images___internal___content'
  | 'information___images___internal___contentDigest'
  | 'information___images___internal___description'
  | 'information___images___internal___fieldOwners'
  | 'information___images___internal___ignoreType'
  | 'information___images___internal___mediaType'
  | 'information___images___internal___owner'
  | 'information___images___internal___type'
  | 'information___address___contentful_id'
  | 'information___address___id'
  | 'information___address___node_locale'
  | 'information___address___name'
  | 'information___address___name2'
  | 'information___address___city'
  | 'information___address___country'
  | 'information___address___code'
  | 'information___address___information'
  | 'information___address___information___contentful_id'
  | 'information___address___information___id'
  | 'information___address___information___node_locale'
  | 'information___address___information___name'
  | 'information___address___information___shortName'
  | 'information___address___information___email'
  | 'information___address___information___mobile'
  | 'information___address___information___birthday'
  | 'information___address___information___definition'
  | 'information___address___information___contentfulid'
  | 'information___address___information___images'
  | 'information___address___information___socials'
  | 'information___address___information___spaceId'
  | 'information___address___information___createdAt'
  | 'information___address___information___updatedAt'
  | 'information___address___information___children'
  | 'information___address___spaceId'
  | 'information___address___createdAt'
  | 'information___address___updatedAt'
  | 'information___address___sys___type'
  | 'information___address___sys___revision'
  | 'information___address___parent___id'
  | 'information___address___parent___children'
  | 'information___address___children'
  | 'information___address___children___id'
  | 'information___address___children___children'
  | 'information___address___internal___content'
  | 'information___address___internal___contentDigest'
  | 'information___address___internal___description'
  | 'information___address___internal___fieldOwners'
  | 'information___address___internal___ignoreType'
  | 'information___address___internal___mediaType'
  | 'information___address___internal___owner'
  | 'information___address___internal___type'
  | 'information___socials'
  | 'information___socials___contentful_id'
  | 'information___socials___id'
  | 'information___socials___node_locale'
  | 'information___socials___key'
  | 'information___socials___name'
  | 'information___socials___username'
  | 'information___socials___url'
  | 'information___socials___information'
  | 'information___socials___information___contentful_id'
  | 'information___socials___information___id'
  | 'information___socials___information___node_locale'
  | 'information___socials___information___name'
  | 'information___socials___information___shortName'
  | 'information___socials___information___email'
  | 'information___socials___information___mobile'
  | 'information___socials___information___birthday'
  | 'information___socials___information___definition'
  | 'information___socials___information___contentfulid'
  | 'information___socials___information___images'
  | 'information___socials___information___socials'
  | 'information___socials___information___spaceId'
  | 'information___socials___information___createdAt'
  | 'information___socials___information___updatedAt'
  | 'information___socials___information___children'
  | 'information___socials___spaceId'
  | 'information___socials___createdAt'
  | 'information___socials___updatedAt'
  | 'information___socials___sys___type'
  | 'information___socials___sys___revision'
  | 'information___socials___parent___id'
  | 'information___socials___parent___children'
  | 'information___socials___children'
  | 'information___socials___children___id'
  | 'information___socials___children___children'
  | 'information___socials___internal___content'
  | 'information___socials___internal___contentDigest'
  | 'information___socials___internal___description'
  | 'information___socials___internal___fieldOwners'
  | 'information___socials___internal___ignoreType'
  | 'information___socials___internal___mediaType'
  | 'information___socials___internal___owner'
  | 'information___socials___internal___type'
  | 'information___spaceId'
  | 'information___createdAt'
  | 'information___updatedAt'
  | 'information___sys___type'
  | 'information___sys___revision'
  | 'information___parent___id'
  | 'information___parent___parent___id'
  | 'information___parent___parent___children'
  | 'information___parent___children'
  | 'information___parent___children___id'
  | 'information___parent___children___children'
  | 'information___parent___internal___content'
  | 'information___parent___internal___contentDigest'
  | 'information___parent___internal___description'
  | 'information___parent___internal___fieldOwners'
  | 'information___parent___internal___ignoreType'
  | 'information___parent___internal___mediaType'
  | 'information___parent___internal___owner'
  | 'information___parent___internal___type'
  | 'information___children'
  | 'information___children___id'
  | 'information___children___parent___id'
  | 'information___children___parent___children'
  | 'information___children___children'
  | 'information___children___children___id'
  | 'information___children___children___children'
  | 'information___children___internal___content'
  | 'information___children___internal___contentDigest'
  | 'information___children___internal___description'
  | 'information___children___internal___fieldOwners'
  | 'information___children___internal___ignoreType'
  | 'information___children___internal___mediaType'
  | 'information___children___internal___owner'
  | 'information___children___internal___type'
  | 'information___internal___content'
  | 'information___internal___contentDigest'
  | 'information___internal___description'
  | 'information___internal___fieldOwners'
  | 'information___internal___ignoreType'
  | 'information___internal___mediaType'
  | 'information___internal___owner'
  | 'information___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulAddressFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  name2?: Maybe<StringQueryOperatorInput>;
  city?: Maybe<StringQueryOperatorInput>;
  country?: Maybe<StringQueryOperatorInput>;
  code?: Maybe<StringQueryOperatorInput>;
  information?: Maybe<ContentfulInformationFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAddressSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulAddressGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAddressEdge>;
  nodes: Array<ContentfulAddress>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAddressSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAddressFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAddressSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulAddressSysContentType>;
};

export type ContentfulAddressSysContentType = {
  sys?: Maybe<ContentfulAddressSysContentTypeSys>;
};

export type ContentfulAddressSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulAddressSysContentTypeSysFilterInput>;
};

export type ContentfulAddressSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulAddressSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAddressSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulAddressSysContentTypeFilterInput>;
};

export type ContentfulAsset = ContentfulReference & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAssetSys>;
  localFile?: Maybe<File>;
  fixed?: Maybe<ContentfulFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ContentfulResolutions>;
  fluid?: Maybe<ContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ContentfulSizes>;
  resize?: Maybe<ContentfulResize>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulAssetCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'file___url'
  | 'file___details___size'
  | 'file___details___image___width'
  | 'file___details___image___height'
  | 'file___fileName'
  | 'file___contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'sys___type'
  | 'sys___revision'
  | 'localFile___sourceInstanceName'
  | 'localFile___absolutePath'
  | 'localFile___relativePath'
  | 'localFile___extension'
  | 'localFile___size'
  | 'localFile___prettySize'
  | 'localFile___modifiedTime'
  | 'localFile___accessTime'
  | 'localFile___changeTime'
  | 'localFile___birthTime'
  | 'localFile___root'
  | 'localFile___dir'
  | 'localFile___base'
  | 'localFile___ext'
  | 'localFile___name'
  | 'localFile___relativeDirectory'
  | 'localFile___dev'
  | 'localFile___mode'
  | 'localFile___nlink'
  | 'localFile___uid'
  | 'localFile___gid'
  | 'localFile___rdev'
  | 'localFile___ino'
  | 'localFile___atimeMs'
  | 'localFile___mtimeMs'
  | 'localFile___ctimeMs'
  | 'localFile___atime'
  | 'localFile___mtime'
  | 'localFile___ctime'
  | 'localFile___birthtime'
  | 'localFile___birthtimeMs'
  | 'localFile___blksize'
  | 'localFile___blocks'
  | 'localFile___url'
  | 'localFile___publicURL'
  | 'localFile___childImageSharp___fixed___base64'
  | 'localFile___childImageSharp___fixed___tracedSVG'
  | 'localFile___childImageSharp___fixed___aspectRatio'
  | 'localFile___childImageSharp___fixed___width'
  | 'localFile___childImageSharp___fixed___height'
  | 'localFile___childImageSharp___fixed___src'
  | 'localFile___childImageSharp___fixed___srcSet'
  | 'localFile___childImageSharp___fixed___srcWebp'
  | 'localFile___childImageSharp___fixed___srcSetWebp'
  | 'localFile___childImageSharp___fixed___originalName'
  | 'localFile___childImageSharp___resolutions___base64'
  | 'localFile___childImageSharp___resolutions___tracedSVG'
  | 'localFile___childImageSharp___resolutions___aspectRatio'
  | 'localFile___childImageSharp___resolutions___width'
  | 'localFile___childImageSharp___resolutions___height'
  | 'localFile___childImageSharp___resolutions___src'
  | 'localFile___childImageSharp___resolutions___srcSet'
  | 'localFile___childImageSharp___resolutions___srcWebp'
  | 'localFile___childImageSharp___resolutions___srcSetWebp'
  | 'localFile___childImageSharp___resolutions___originalName'
  | 'localFile___childImageSharp___fluid___base64'
  | 'localFile___childImageSharp___fluid___tracedSVG'
  | 'localFile___childImageSharp___fluid___aspectRatio'
  | 'localFile___childImageSharp___fluid___src'
  | 'localFile___childImageSharp___fluid___srcSet'
  | 'localFile___childImageSharp___fluid___srcWebp'
  | 'localFile___childImageSharp___fluid___srcSetWebp'
  | 'localFile___childImageSharp___fluid___sizes'
  | 'localFile___childImageSharp___fluid___originalImg'
  | 'localFile___childImageSharp___fluid___originalName'
  | 'localFile___childImageSharp___fluid___presentationWidth'
  | 'localFile___childImageSharp___fluid___presentationHeight'
  | 'localFile___childImageSharp___sizes___base64'
  | 'localFile___childImageSharp___sizes___tracedSVG'
  | 'localFile___childImageSharp___sizes___aspectRatio'
  | 'localFile___childImageSharp___sizes___src'
  | 'localFile___childImageSharp___sizes___srcSet'
  | 'localFile___childImageSharp___sizes___srcWebp'
  | 'localFile___childImageSharp___sizes___srcSetWebp'
  | 'localFile___childImageSharp___sizes___sizes'
  | 'localFile___childImageSharp___sizes___originalImg'
  | 'localFile___childImageSharp___sizes___originalName'
  | 'localFile___childImageSharp___sizes___presentationWidth'
  | 'localFile___childImageSharp___sizes___presentationHeight'
  | 'localFile___childImageSharp___gatsbyImageData'
  | 'localFile___childImageSharp___original___width'
  | 'localFile___childImageSharp___original___height'
  | 'localFile___childImageSharp___original___src'
  | 'localFile___childImageSharp___resize___src'
  | 'localFile___childImageSharp___resize___tracedSVG'
  | 'localFile___childImageSharp___resize___width'
  | 'localFile___childImageSharp___resize___height'
  | 'localFile___childImageSharp___resize___aspectRatio'
  | 'localFile___childImageSharp___resize___originalName'
  | 'localFile___childImageSharp___id'
  | 'localFile___childImageSharp___parent___id'
  | 'localFile___childImageSharp___parent___children'
  | 'localFile___childImageSharp___children'
  | 'localFile___childImageSharp___children___id'
  | 'localFile___childImageSharp___children___children'
  | 'localFile___childImageSharp___internal___content'
  | 'localFile___childImageSharp___internal___contentDigest'
  | 'localFile___childImageSharp___internal___description'
  | 'localFile___childImageSharp___internal___fieldOwners'
  | 'localFile___childImageSharp___internal___ignoreType'
  | 'localFile___childImageSharp___internal___mediaType'
  | 'localFile___childImageSharp___internal___owner'
  | 'localFile___childImageSharp___internal___type'
  | 'localFile___id'
  | 'localFile___parent___id'
  | 'localFile___parent___parent___id'
  | 'localFile___parent___parent___children'
  | 'localFile___parent___children'
  | 'localFile___parent___children___id'
  | 'localFile___parent___children___children'
  | 'localFile___parent___internal___content'
  | 'localFile___parent___internal___contentDigest'
  | 'localFile___parent___internal___description'
  | 'localFile___parent___internal___fieldOwners'
  | 'localFile___parent___internal___ignoreType'
  | 'localFile___parent___internal___mediaType'
  | 'localFile___parent___internal___owner'
  | 'localFile___parent___internal___type'
  | 'localFile___children'
  | 'localFile___children___id'
  | 'localFile___children___parent___id'
  | 'localFile___children___parent___children'
  | 'localFile___children___children'
  | 'localFile___children___children___id'
  | 'localFile___children___children___children'
  | 'localFile___children___internal___content'
  | 'localFile___children___internal___contentDigest'
  | 'localFile___children___internal___description'
  | 'localFile___children___internal___fieldOwners'
  | 'localFile___children___internal___ignoreType'
  | 'localFile___children___internal___mediaType'
  | 'localFile___children___internal___owner'
  | 'localFile___children___internal___type'
  | 'localFile___internal___content'
  | 'localFile___internal___contentDigest'
  | 'localFile___internal___description'
  | 'localFile___internal___fieldOwners'
  | 'localFile___internal___ignoreType'
  | 'localFile___internal___mediaType'
  | 'localFile___internal___owner'
  | 'localFile___internal___type'
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'resize___base64'
  | 'resize___tracedSVG'
  | 'resize___src'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulAssetFilterListInput = {
  elemMatch?: Maybe<ContentfulAssetFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAssetSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulContentTypeSys>;
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'displayField'
  | 'description'
  | 'sys___type';

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulContentTypeSysFilterInput>;
};

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulContentTypeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulDocument = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  file?: Maybe<ContentfulAsset>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulDocumentSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulDocumentCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulDocumentUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulDocumentConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulDocumentEdge>;
  nodes: Array<ContentfulDocument>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulDocumentGroupConnection>;
};


export type ContentfulDocumentConnectionDistinctArgs = {
  field: ContentfulDocumentFieldsEnum;
};


export type ContentfulDocumentConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulDocumentFieldsEnum;
};

export type ContentfulDocumentEdge = {
  next?: Maybe<ContentfulDocument>;
  node: ContentfulDocument;
  previous?: Maybe<ContentfulDocument>;
};

export type ContentfulDocumentFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'name'
  | 'file___contentful_id'
  | 'file___id'
  | 'file___spaceId'
  | 'file___createdAt'
  | 'file___updatedAt'
  | 'file___file___url'
  | 'file___file___details___size'
  | 'file___file___fileName'
  | 'file___file___contentType'
  | 'file___title'
  | 'file___description'
  | 'file___node_locale'
  | 'file___sys___type'
  | 'file___sys___revision'
  | 'file___localFile___sourceInstanceName'
  | 'file___localFile___absolutePath'
  | 'file___localFile___relativePath'
  | 'file___localFile___extension'
  | 'file___localFile___size'
  | 'file___localFile___prettySize'
  | 'file___localFile___modifiedTime'
  | 'file___localFile___accessTime'
  | 'file___localFile___changeTime'
  | 'file___localFile___birthTime'
  | 'file___localFile___root'
  | 'file___localFile___dir'
  | 'file___localFile___base'
  | 'file___localFile___ext'
  | 'file___localFile___name'
  | 'file___localFile___relativeDirectory'
  | 'file___localFile___dev'
  | 'file___localFile___mode'
  | 'file___localFile___nlink'
  | 'file___localFile___uid'
  | 'file___localFile___gid'
  | 'file___localFile___rdev'
  | 'file___localFile___ino'
  | 'file___localFile___atimeMs'
  | 'file___localFile___mtimeMs'
  | 'file___localFile___ctimeMs'
  | 'file___localFile___atime'
  | 'file___localFile___mtime'
  | 'file___localFile___ctime'
  | 'file___localFile___birthtime'
  | 'file___localFile___birthtimeMs'
  | 'file___localFile___blksize'
  | 'file___localFile___blocks'
  | 'file___localFile___url'
  | 'file___localFile___publicURL'
  | 'file___localFile___childImageSharp___gatsbyImageData'
  | 'file___localFile___childImageSharp___id'
  | 'file___localFile___childImageSharp___children'
  | 'file___localFile___id'
  | 'file___localFile___parent___id'
  | 'file___localFile___parent___children'
  | 'file___localFile___children'
  | 'file___localFile___children___id'
  | 'file___localFile___children___children'
  | 'file___localFile___internal___content'
  | 'file___localFile___internal___contentDigest'
  | 'file___localFile___internal___description'
  | 'file___localFile___internal___fieldOwners'
  | 'file___localFile___internal___ignoreType'
  | 'file___localFile___internal___mediaType'
  | 'file___localFile___internal___owner'
  | 'file___localFile___internal___type'
  | 'file___fixed___base64'
  | 'file___fixed___tracedSVG'
  | 'file___fixed___aspectRatio'
  | 'file___fixed___width'
  | 'file___fixed___height'
  | 'file___fixed___src'
  | 'file___fixed___srcSet'
  | 'file___fixed___srcWebp'
  | 'file___fixed___srcSetWebp'
  | 'file___resolutions___base64'
  | 'file___resolutions___tracedSVG'
  | 'file___resolutions___aspectRatio'
  | 'file___resolutions___width'
  | 'file___resolutions___height'
  | 'file___resolutions___src'
  | 'file___resolutions___srcSet'
  | 'file___resolutions___srcWebp'
  | 'file___resolutions___srcSetWebp'
  | 'file___fluid___base64'
  | 'file___fluid___tracedSVG'
  | 'file___fluid___aspectRatio'
  | 'file___fluid___src'
  | 'file___fluid___srcSet'
  | 'file___fluid___srcWebp'
  | 'file___fluid___srcSetWebp'
  | 'file___fluid___sizes'
  | 'file___sizes___base64'
  | 'file___sizes___tracedSVG'
  | 'file___sizes___aspectRatio'
  | 'file___sizes___src'
  | 'file___sizes___srcSet'
  | 'file___sizes___srcWebp'
  | 'file___sizes___srcSetWebp'
  | 'file___sizes___sizes'
  | 'file___resize___base64'
  | 'file___resize___tracedSVG'
  | 'file___resize___src'
  | 'file___resize___width'
  | 'file___resize___height'
  | 'file___resize___aspectRatio'
  | 'file___parent___id'
  | 'file___parent___parent___id'
  | 'file___parent___parent___children'
  | 'file___parent___children'
  | 'file___parent___children___id'
  | 'file___parent___children___children'
  | 'file___parent___internal___content'
  | 'file___parent___internal___contentDigest'
  | 'file___parent___internal___description'
  | 'file___parent___internal___fieldOwners'
  | 'file___parent___internal___ignoreType'
  | 'file___parent___internal___mediaType'
  | 'file___parent___internal___owner'
  | 'file___parent___internal___type'
  | 'file___children'
  | 'file___children___id'
  | 'file___children___parent___id'
  | 'file___children___parent___children'
  | 'file___children___children'
  | 'file___children___children___id'
  | 'file___children___children___children'
  | 'file___children___internal___content'
  | 'file___children___internal___contentDigest'
  | 'file___children___internal___description'
  | 'file___children___internal___fieldOwners'
  | 'file___children___internal___ignoreType'
  | 'file___children___internal___mediaType'
  | 'file___children___internal___owner'
  | 'file___children___internal___type'
  | 'file___internal___content'
  | 'file___internal___contentDigest'
  | 'file___internal___description'
  | 'file___internal___fieldOwners'
  | 'file___internal___ignoreType'
  | 'file___internal___mediaType'
  | 'file___internal___owner'
  | 'file___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulDocumentFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulDocumentSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulDocumentGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulDocumentEdge>;
  nodes: Array<ContentfulDocument>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulDocumentSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulDocumentFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulDocumentSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulDocumentSysContentType>;
};

export type ContentfulDocumentSysContentType = {
  sys?: Maybe<ContentfulDocumentSysContentTypeSys>;
};

export type ContentfulDocumentSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulDocumentSysContentTypeSysFilterInput>;
};

export type ContentfulDocumentSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulDocumentSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulDocumentSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulDocumentSysContentTypeFilterInput>;
};

export type ContentfulEducation = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ContentfulEducationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEducationEdge>;
  nodes: Array<ContentfulEducation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulEducationGroupConnection>;
};


export type ContentfulEducationConnectionDistinctArgs = {
  field: ContentfulEducationFieldsEnum;
};


export type ContentfulEducationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulEducationFieldsEnum;
};

export type ContentfulEducationEdge = {
  next?: Maybe<ContentfulEducation>;
  node: ContentfulEducation;
  previous?: Maybe<ContentfulEducation>;
};

export type ContentfulEducationFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulEducationFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulEducationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEducationEdge>;
  nodes: Array<ContentfulEducation>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulEducationSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulEducationFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulEducationType = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulEducationTypeSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulEducationTypeCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulEducationTypeUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulEducationTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEducationTypeEdge>;
  nodes: Array<ContentfulEducationType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulEducationTypeGroupConnection>;
};


export type ContentfulEducationTypeConnectionDistinctArgs = {
  field: ContentfulEducationTypeFieldsEnum;
};


export type ContentfulEducationTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulEducationTypeFieldsEnum;
};

export type ContentfulEducationTypeEdge = {
  next?: Maybe<ContentfulEducationType>;
  node: ContentfulEducationType;
  previous?: Maybe<ContentfulEducationType>;
};

export type ContentfulEducationTypeFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'key'
  | 'name'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulEducationTypeFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  key?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulEducationTypeSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulEducationTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEducationTypeEdge>;
  nodes: Array<ContentfulEducationType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulEducationTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulEducationTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulEducationTypeSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulEducationTypeSysContentType>;
};

export type ContentfulEducationTypeSysContentType = {
  sys?: Maybe<ContentfulEducationTypeSysContentTypeSys>;
};

export type ContentfulEducationTypeSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulEducationTypeSysContentTypeSysFilterInput>;
};

export type ContentfulEducationTypeSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulEducationTypeSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulEducationTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulEducationTypeSysContentTypeFilterInput>;
};

export type ContentfulEntry = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
};

export type ContentfulEntryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulEntryGroupConnection>;
};


export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryEdge = {
  next?: Maybe<ContentfulEntry>;
  node: ContentfulEntry;
  previous?: Maybe<ContentfulEntry>;
};

export type ContentfulEntryFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale';

export type ContentfulEntryFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulEntryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulEntrySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulEntryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulImageCropFocus = 
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'BOTTOM'
  | 'BOTTOM_RIGHT'
  | 'BOTTOM_LEFT'
  | 'RIGHT'
  | 'LEFT'
  | 'FACE'
  | 'FACES'
  | 'CENTER';

export type ContentfulImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ContentfulInformation = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['Date']>;
  definition?: Maybe<Scalars['String']>;
  summary?: Maybe<ContentfulInformationSummary>;
  contentfulid?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<ContentfulAsset>>>;
  address?: Maybe<ContentfulAddress>;
  socials?: Maybe<Array<Maybe<ContentfulSocial>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulInformationSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulInformationBirthdayArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulInformationCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulInformationUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulInformationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulInformationEdge>;
  nodes: Array<ContentfulInformation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulInformationGroupConnection>;
};


export type ContentfulInformationConnectionDistinctArgs = {
  field: ContentfulInformationFieldsEnum;
};


export type ContentfulInformationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulInformationFieldsEnum;
};

export type ContentfulInformationEdge = {
  next?: Maybe<ContentfulInformation>;
  node: ContentfulInformation;
  previous?: Maybe<ContentfulInformation>;
};

export type ContentfulInformationFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'name'
  | 'shortName'
  | 'email'
  | 'mobile'
  | 'birthday'
  | 'definition'
  | 'summary___raw'
  | 'contentfulid'
  | 'images'
  | 'images___contentful_id'
  | 'images___id'
  | 'images___spaceId'
  | 'images___createdAt'
  | 'images___updatedAt'
  | 'images___file___url'
  | 'images___file___details___size'
  | 'images___file___fileName'
  | 'images___file___contentType'
  | 'images___title'
  | 'images___description'
  | 'images___node_locale'
  | 'images___sys___type'
  | 'images___sys___revision'
  | 'images___localFile___sourceInstanceName'
  | 'images___localFile___absolutePath'
  | 'images___localFile___relativePath'
  | 'images___localFile___extension'
  | 'images___localFile___size'
  | 'images___localFile___prettySize'
  | 'images___localFile___modifiedTime'
  | 'images___localFile___accessTime'
  | 'images___localFile___changeTime'
  | 'images___localFile___birthTime'
  | 'images___localFile___root'
  | 'images___localFile___dir'
  | 'images___localFile___base'
  | 'images___localFile___ext'
  | 'images___localFile___name'
  | 'images___localFile___relativeDirectory'
  | 'images___localFile___dev'
  | 'images___localFile___mode'
  | 'images___localFile___nlink'
  | 'images___localFile___uid'
  | 'images___localFile___gid'
  | 'images___localFile___rdev'
  | 'images___localFile___ino'
  | 'images___localFile___atimeMs'
  | 'images___localFile___mtimeMs'
  | 'images___localFile___ctimeMs'
  | 'images___localFile___atime'
  | 'images___localFile___mtime'
  | 'images___localFile___ctime'
  | 'images___localFile___birthtime'
  | 'images___localFile___birthtimeMs'
  | 'images___localFile___blksize'
  | 'images___localFile___blocks'
  | 'images___localFile___url'
  | 'images___localFile___publicURL'
  | 'images___localFile___childImageSharp___gatsbyImageData'
  | 'images___localFile___childImageSharp___id'
  | 'images___localFile___childImageSharp___children'
  | 'images___localFile___id'
  | 'images___localFile___parent___id'
  | 'images___localFile___parent___children'
  | 'images___localFile___children'
  | 'images___localFile___children___id'
  | 'images___localFile___children___children'
  | 'images___localFile___internal___content'
  | 'images___localFile___internal___contentDigest'
  | 'images___localFile___internal___description'
  | 'images___localFile___internal___fieldOwners'
  | 'images___localFile___internal___ignoreType'
  | 'images___localFile___internal___mediaType'
  | 'images___localFile___internal___owner'
  | 'images___localFile___internal___type'
  | 'images___fixed___base64'
  | 'images___fixed___tracedSVG'
  | 'images___fixed___aspectRatio'
  | 'images___fixed___width'
  | 'images___fixed___height'
  | 'images___fixed___src'
  | 'images___fixed___srcSet'
  | 'images___fixed___srcWebp'
  | 'images___fixed___srcSetWebp'
  | 'images___resolutions___base64'
  | 'images___resolutions___tracedSVG'
  | 'images___resolutions___aspectRatio'
  | 'images___resolutions___width'
  | 'images___resolutions___height'
  | 'images___resolutions___src'
  | 'images___resolutions___srcSet'
  | 'images___resolutions___srcWebp'
  | 'images___resolutions___srcSetWebp'
  | 'images___fluid___base64'
  | 'images___fluid___tracedSVG'
  | 'images___fluid___aspectRatio'
  | 'images___fluid___src'
  | 'images___fluid___srcSet'
  | 'images___fluid___srcWebp'
  | 'images___fluid___srcSetWebp'
  | 'images___fluid___sizes'
  | 'images___sizes___base64'
  | 'images___sizes___tracedSVG'
  | 'images___sizes___aspectRatio'
  | 'images___sizes___src'
  | 'images___sizes___srcSet'
  | 'images___sizes___srcWebp'
  | 'images___sizes___srcSetWebp'
  | 'images___sizes___sizes'
  | 'images___resize___base64'
  | 'images___resize___tracedSVG'
  | 'images___resize___src'
  | 'images___resize___width'
  | 'images___resize___height'
  | 'images___resize___aspectRatio'
  | 'images___parent___id'
  | 'images___parent___parent___id'
  | 'images___parent___parent___children'
  | 'images___parent___children'
  | 'images___parent___children___id'
  | 'images___parent___children___children'
  | 'images___parent___internal___content'
  | 'images___parent___internal___contentDigest'
  | 'images___parent___internal___description'
  | 'images___parent___internal___fieldOwners'
  | 'images___parent___internal___ignoreType'
  | 'images___parent___internal___mediaType'
  | 'images___parent___internal___owner'
  | 'images___parent___internal___type'
  | 'images___children'
  | 'images___children___id'
  | 'images___children___parent___id'
  | 'images___children___parent___children'
  | 'images___children___children'
  | 'images___children___children___id'
  | 'images___children___children___children'
  | 'images___children___internal___content'
  | 'images___children___internal___contentDigest'
  | 'images___children___internal___description'
  | 'images___children___internal___fieldOwners'
  | 'images___children___internal___ignoreType'
  | 'images___children___internal___mediaType'
  | 'images___children___internal___owner'
  | 'images___children___internal___type'
  | 'images___internal___content'
  | 'images___internal___contentDigest'
  | 'images___internal___description'
  | 'images___internal___fieldOwners'
  | 'images___internal___ignoreType'
  | 'images___internal___mediaType'
  | 'images___internal___owner'
  | 'images___internal___type'
  | 'address___contentful_id'
  | 'address___id'
  | 'address___node_locale'
  | 'address___name'
  | 'address___name2'
  | 'address___city'
  | 'address___country'
  | 'address___code'
  | 'address___information'
  | 'address___information___contentful_id'
  | 'address___information___id'
  | 'address___information___node_locale'
  | 'address___information___name'
  | 'address___information___shortName'
  | 'address___information___email'
  | 'address___information___mobile'
  | 'address___information___birthday'
  | 'address___information___definition'
  | 'address___information___summary___raw'
  | 'address___information___contentfulid'
  | 'address___information___images'
  | 'address___information___images___contentful_id'
  | 'address___information___images___id'
  | 'address___information___images___spaceId'
  | 'address___information___images___createdAt'
  | 'address___information___images___updatedAt'
  | 'address___information___images___title'
  | 'address___information___images___description'
  | 'address___information___images___node_locale'
  | 'address___information___images___children'
  | 'address___information___address___contentful_id'
  | 'address___information___address___id'
  | 'address___information___address___node_locale'
  | 'address___information___address___name'
  | 'address___information___address___name2'
  | 'address___information___address___city'
  | 'address___information___address___country'
  | 'address___information___address___code'
  | 'address___information___address___information'
  | 'address___information___address___spaceId'
  | 'address___information___address___createdAt'
  | 'address___information___address___updatedAt'
  | 'address___information___address___children'
  | 'address___information___socials'
  | 'address___information___socials___contentful_id'
  | 'address___information___socials___id'
  | 'address___information___socials___node_locale'
  | 'address___information___socials___key'
  | 'address___information___socials___name'
  | 'address___information___socials___username'
  | 'address___information___socials___url'
  | 'address___information___socials___information'
  | 'address___information___socials___spaceId'
  | 'address___information___socials___createdAt'
  | 'address___information___socials___updatedAt'
  | 'address___information___socials___children'
  | 'address___information___spaceId'
  | 'address___information___createdAt'
  | 'address___information___updatedAt'
  | 'address___information___sys___type'
  | 'address___information___sys___revision'
  | 'address___information___parent___id'
  | 'address___information___parent___children'
  | 'address___information___children'
  | 'address___information___children___id'
  | 'address___information___children___children'
  | 'address___information___internal___content'
  | 'address___information___internal___contentDigest'
  | 'address___information___internal___description'
  | 'address___information___internal___fieldOwners'
  | 'address___information___internal___ignoreType'
  | 'address___information___internal___mediaType'
  | 'address___information___internal___owner'
  | 'address___information___internal___type'
  | 'address___spaceId'
  | 'address___createdAt'
  | 'address___updatedAt'
  | 'address___sys___type'
  | 'address___sys___revision'
  | 'address___parent___id'
  | 'address___parent___parent___id'
  | 'address___parent___parent___children'
  | 'address___parent___children'
  | 'address___parent___children___id'
  | 'address___parent___children___children'
  | 'address___parent___internal___content'
  | 'address___parent___internal___contentDigest'
  | 'address___parent___internal___description'
  | 'address___parent___internal___fieldOwners'
  | 'address___parent___internal___ignoreType'
  | 'address___parent___internal___mediaType'
  | 'address___parent___internal___owner'
  | 'address___parent___internal___type'
  | 'address___children'
  | 'address___children___id'
  | 'address___children___parent___id'
  | 'address___children___parent___children'
  | 'address___children___children'
  | 'address___children___children___id'
  | 'address___children___children___children'
  | 'address___children___internal___content'
  | 'address___children___internal___contentDigest'
  | 'address___children___internal___description'
  | 'address___children___internal___fieldOwners'
  | 'address___children___internal___ignoreType'
  | 'address___children___internal___mediaType'
  | 'address___children___internal___owner'
  | 'address___children___internal___type'
  | 'address___internal___content'
  | 'address___internal___contentDigest'
  | 'address___internal___description'
  | 'address___internal___fieldOwners'
  | 'address___internal___ignoreType'
  | 'address___internal___mediaType'
  | 'address___internal___owner'
  | 'address___internal___type'
  | 'socials'
  | 'socials___contentful_id'
  | 'socials___id'
  | 'socials___node_locale'
  | 'socials___key'
  | 'socials___name'
  | 'socials___username'
  | 'socials___url'
  | 'socials___information'
  | 'socials___information___contentful_id'
  | 'socials___information___id'
  | 'socials___information___node_locale'
  | 'socials___information___name'
  | 'socials___information___shortName'
  | 'socials___information___email'
  | 'socials___information___mobile'
  | 'socials___information___birthday'
  | 'socials___information___definition'
  | 'socials___information___summary___raw'
  | 'socials___information___contentfulid'
  | 'socials___information___images'
  | 'socials___information___images___contentful_id'
  | 'socials___information___images___id'
  | 'socials___information___images___spaceId'
  | 'socials___information___images___createdAt'
  | 'socials___information___images___updatedAt'
  | 'socials___information___images___title'
  | 'socials___information___images___description'
  | 'socials___information___images___node_locale'
  | 'socials___information___images___children'
  | 'socials___information___address___contentful_id'
  | 'socials___information___address___id'
  | 'socials___information___address___node_locale'
  | 'socials___information___address___name'
  | 'socials___information___address___name2'
  | 'socials___information___address___city'
  | 'socials___information___address___country'
  | 'socials___information___address___code'
  | 'socials___information___address___information'
  | 'socials___information___address___spaceId'
  | 'socials___information___address___createdAt'
  | 'socials___information___address___updatedAt'
  | 'socials___information___address___children'
  | 'socials___information___socials'
  | 'socials___information___socials___contentful_id'
  | 'socials___information___socials___id'
  | 'socials___information___socials___node_locale'
  | 'socials___information___socials___key'
  | 'socials___information___socials___name'
  | 'socials___information___socials___username'
  | 'socials___information___socials___url'
  | 'socials___information___socials___information'
  | 'socials___information___socials___spaceId'
  | 'socials___information___socials___createdAt'
  | 'socials___information___socials___updatedAt'
  | 'socials___information___socials___children'
  | 'socials___information___spaceId'
  | 'socials___information___createdAt'
  | 'socials___information___updatedAt'
  | 'socials___information___sys___type'
  | 'socials___information___sys___revision'
  | 'socials___information___parent___id'
  | 'socials___information___parent___children'
  | 'socials___information___children'
  | 'socials___information___children___id'
  | 'socials___information___children___children'
  | 'socials___information___internal___content'
  | 'socials___information___internal___contentDigest'
  | 'socials___information___internal___description'
  | 'socials___information___internal___fieldOwners'
  | 'socials___information___internal___ignoreType'
  | 'socials___information___internal___mediaType'
  | 'socials___information___internal___owner'
  | 'socials___information___internal___type'
  | 'socials___spaceId'
  | 'socials___createdAt'
  | 'socials___updatedAt'
  | 'socials___sys___type'
  | 'socials___sys___revision'
  | 'socials___parent___id'
  | 'socials___parent___parent___id'
  | 'socials___parent___parent___children'
  | 'socials___parent___children'
  | 'socials___parent___children___id'
  | 'socials___parent___children___children'
  | 'socials___parent___internal___content'
  | 'socials___parent___internal___contentDigest'
  | 'socials___parent___internal___description'
  | 'socials___parent___internal___fieldOwners'
  | 'socials___parent___internal___ignoreType'
  | 'socials___parent___internal___mediaType'
  | 'socials___parent___internal___owner'
  | 'socials___parent___internal___type'
  | 'socials___children'
  | 'socials___children___id'
  | 'socials___children___parent___id'
  | 'socials___children___parent___children'
  | 'socials___children___children'
  | 'socials___children___children___id'
  | 'socials___children___children___children'
  | 'socials___children___internal___content'
  | 'socials___children___internal___contentDigest'
  | 'socials___children___internal___description'
  | 'socials___children___internal___fieldOwners'
  | 'socials___children___internal___ignoreType'
  | 'socials___children___internal___mediaType'
  | 'socials___children___internal___owner'
  | 'socials___children___internal___type'
  | 'socials___internal___content'
  | 'socials___internal___contentDigest'
  | 'socials___internal___description'
  | 'socials___internal___fieldOwners'
  | 'socials___internal___ignoreType'
  | 'socials___internal___mediaType'
  | 'socials___internal___owner'
  | 'socials___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulInformationFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  shortName?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  mobile?: Maybe<StringQueryOperatorInput>;
  birthday?: Maybe<DateQueryOperatorInput>;
  definition?: Maybe<StringQueryOperatorInput>;
  summary?: Maybe<ContentfulInformationSummaryFilterInput>;
  contentfulid?: Maybe<StringQueryOperatorInput>;
  images?: Maybe<ContentfulAssetFilterListInput>;
  address?: Maybe<ContentfulAddressFilterInput>;
  socials?: Maybe<ContentfulSocialFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulInformationSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulInformationFilterListInput = {
  elemMatch?: Maybe<ContentfulInformationFilterInput>;
};

export type ContentfulInformationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulInformationEdge>;
  nodes: Array<ContentfulInformation>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulInformationSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulInformationFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulInformationSummary = {
  raw?: Maybe<Scalars['String']>;
};

export type ContentfulInformationSummaryFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulInformationSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulInformationSysContentType>;
};

export type ContentfulInformationSysContentType = {
  sys?: Maybe<ContentfulInformationSysContentTypeSys>;
};

export type ContentfulInformationSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulInformationSysContentTypeSysFilterInput>;
};

export type ContentfulInformationSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulInformationSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulInformationSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulInformationSysContentTypeFilterInput>;
};

export type ContentfulInterest = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  text?: Maybe<ContentfulInterestText>;
  contentfulid?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<ContentfulTag>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulInterestSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulInterestCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulInterestUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulInterestConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulInterestEdge>;
  nodes: Array<ContentfulInterest>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulInterestGroupConnection>;
};


export type ContentfulInterestConnectionDistinctArgs = {
  field: ContentfulInterestFieldsEnum;
};


export type ContentfulInterestConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulInterestFieldsEnum;
};

export type ContentfulInterestEdge = {
  next?: Maybe<ContentfulInterest>;
  node: ContentfulInterest;
  previous?: Maybe<ContentfulInterest>;
};

export type ContentfulInterestFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'text___raw'
  | 'contentfulid'
  | 'tags'
  | 'tags___contentful_id'
  | 'tags___id'
  | 'tags___node_locale'
  | 'tags___name'
  | 'tags___work'
  | 'tags___work___contentful_id'
  | 'tags___work___id'
  | 'tags___work___node_locale'
  | 'tags___work___position'
  | 'tags___work___company'
  | 'tags___work___website'
  | 'tags___work___startDate'
  | 'tags___work___summary___raw'
  | 'tags___work___highlights'
  | 'tags___work___image___contentful_id'
  | 'tags___work___image___id'
  | 'tags___work___image___spaceId'
  | 'tags___work___image___createdAt'
  | 'tags___work___image___updatedAt'
  | 'tags___work___image___title'
  | 'tags___work___image___description'
  | 'tags___work___image___node_locale'
  | 'tags___work___image___children'
  | 'tags___work___tags'
  | 'tags___work___tags___contentful_id'
  | 'tags___work___tags___id'
  | 'tags___work___tags___node_locale'
  | 'tags___work___tags___name'
  | 'tags___work___tags___work'
  | 'tags___work___tags___spaceId'
  | 'tags___work___tags___createdAt'
  | 'tags___work___tags___updatedAt'
  | 'tags___work___tags___interest'
  | 'tags___work___tags___children'
  | 'tags___work___spaceId'
  | 'tags___work___createdAt'
  | 'tags___work___updatedAt'
  | 'tags___work___sys___type'
  | 'tags___work___sys___revision'
  | 'tags___work___parent___id'
  | 'tags___work___parent___children'
  | 'tags___work___children'
  | 'tags___work___children___id'
  | 'tags___work___children___children'
  | 'tags___work___internal___content'
  | 'tags___work___internal___contentDigest'
  | 'tags___work___internal___description'
  | 'tags___work___internal___fieldOwners'
  | 'tags___work___internal___ignoreType'
  | 'tags___work___internal___mediaType'
  | 'tags___work___internal___owner'
  | 'tags___work___internal___type'
  | 'tags___spaceId'
  | 'tags___createdAt'
  | 'tags___updatedAt'
  | 'tags___sys___type'
  | 'tags___sys___revision'
  | 'tags___interest'
  | 'tags___interest___contentful_id'
  | 'tags___interest___id'
  | 'tags___interest___node_locale'
  | 'tags___interest___text___raw'
  | 'tags___interest___contentfulid'
  | 'tags___interest___tags'
  | 'tags___interest___tags___contentful_id'
  | 'tags___interest___tags___id'
  | 'tags___interest___tags___node_locale'
  | 'tags___interest___tags___name'
  | 'tags___interest___tags___work'
  | 'tags___interest___tags___spaceId'
  | 'tags___interest___tags___createdAt'
  | 'tags___interest___tags___updatedAt'
  | 'tags___interest___tags___interest'
  | 'tags___interest___tags___children'
  | 'tags___interest___spaceId'
  | 'tags___interest___createdAt'
  | 'tags___interest___updatedAt'
  | 'tags___interest___sys___type'
  | 'tags___interest___sys___revision'
  | 'tags___interest___parent___id'
  | 'tags___interest___parent___children'
  | 'tags___interest___children'
  | 'tags___interest___children___id'
  | 'tags___interest___children___children'
  | 'tags___interest___internal___content'
  | 'tags___interest___internal___contentDigest'
  | 'tags___interest___internal___description'
  | 'tags___interest___internal___fieldOwners'
  | 'tags___interest___internal___ignoreType'
  | 'tags___interest___internal___mediaType'
  | 'tags___interest___internal___owner'
  | 'tags___interest___internal___type'
  | 'tags___parent___id'
  | 'tags___parent___parent___id'
  | 'tags___parent___parent___children'
  | 'tags___parent___children'
  | 'tags___parent___children___id'
  | 'tags___parent___children___children'
  | 'tags___parent___internal___content'
  | 'tags___parent___internal___contentDigest'
  | 'tags___parent___internal___description'
  | 'tags___parent___internal___fieldOwners'
  | 'tags___parent___internal___ignoreType'
  | 'tags___parent___internal___mediaType'
  | 'tags___parent___internal___owner'
  | 'tags___parent___internal___type'
  | 'tags___children'
  | 'tags___children___id'
  | 'tags___children___parent___id'
  | 'tags___children___parent___children'
  | 'tags___children___children'
  | 'tags___children___children___id'
  | 'tags___children___children___children'
  | 'tags___children___internal___content'
  | 'tags___children___internal___contentDigest'
  | 'tags___children___internal___description'
  | 'tags___children___internal___fieldOwners'
  | 'tags___children___internal___ignoreType'
  | 'tags___children___internal___mediaType'
  | 'tags___children___internal___owner'
  | 'tags___children___internal___type'
  | 'tags___internal___content'
  | 'tags___internal___contentDigest'
  | 'tags___internal___description'
  | 'tags___internal___fieldOwners'
  | 'tags___internal___ignoreType'
  | 'tags___internal___mediaType'
  | 'tags___internal___owner'
  | 'tags___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulInterestFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<ContentfulInterestTextFilterInput>;
  contentfulid?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<ContentfulTagFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulInterestSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulInterestFilterListInput = {
  elemMatch?: Maybe<ContentfulInterestFilterInput>;
};

export type ContentfulInterestGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulInterestEdge>;
  nodes: Array<ContentfulInterest>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulInterestSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulInterestFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulInterestSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulInterestSysContentType>;
};

export type ContentfulInterestSysContentType = {
  sys?: Maybe<ContentfulInterestSysContentTypeSys>;
};

export type ContentfulInterestSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulInterestSysContentTypeSysFilterInput>;
};

export type ContentfulInterestSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulInterestSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulInterestSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulInterestSysContentTypeFilterInput>;
};

export type ContentfulInterestText = {
  raw?: Maybe<Scalars['String']>;
};

export type ContentfulInterestTextFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLanguage = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  proficiency?: Maybe<ContentfulProficiency>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulLanguageSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulLanguageCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulLanguageUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulLanguageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLanguageEdge>;
  nodes: Array<ContentfulLanguage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulLanguageGroupConnection>;
};


export type ContentfulLanguageConnectionDistinctArgs = {
  field: ContentfulLanguageFieldsEnum;
};


export type ContentfulLanguageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulLanguageFieldsEnum;
};

export type ContentfulLanguageEdge = {
  next?: Maybe<ContentfulLanguage>;
  node: ContentfulLanguage;
  previous?: Maybe<ContentfulLanguage>;
};

export type ContentfulLanguageFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'name'
  | 'proficiency___contentful_id'
  | 'proficiency___id'
  | 'proficiency___node_locale'
  | 'proficiency___key'
  | 'proficiency___name'
  | 'proficiency___spaceId'
  | 'proficiency___createdAt'
  | 'proficiency___updatedAt'
  | 'proficiency___sys___type'
  | 'proficiency___sys___revision'
  | 'proficiency___language'
  | 'proficiency___language___contentful_id'
  | 'proficiency___language___id'
  | 'proficiency___language___node_locale'
  | 'proficiency___language___name'
  | 'proficiency___language___proficiency___contentful_id'
  | 'proficiency___language___proficiency___id'
  | 'proficiency___language___proficiency___node_locale'
  | 'proficiency___language___proficiency___key'
  | 'proficiency___language___proficiency___name'
  | 'proficiency___language___proficiency___spaceId'
  | 'proficiency___language___proficiency___createdAt'
  | 'proficiency___language___proficiency___updatedAt'
  | 'proficiency___language___proficiency___language'
  | 'proficiency___language___proficiency___children'
  | 'proficiency___language___spaceId'
  | 'proficiency___language___createdAt'
  | 'proficiency___language___updatedAt'
  | 'proficiency___language___sys___type'
  | 'proficiency___language___sys___revision'
  | 'proficiency___language___parent___id'
  | 'proficiency___language___parent___children'
  | 'proficiency___language___children'
  | 'proficiency___language___children___id'
  | 'proficiency___language___children___children'
  | 'proficiency___language___internal___content'
  | 'proficiency___language___internal___contentDigest'
  | 'proficiency___language___internal___description'
  | 'proficiency___language___internal___fieldOwners'
  | 'proficiency___language___internal___ignoreType'
  | 'proficiency___language___internal___mediaType'
  | 'proficiency___language___internal___owner'
  | 'proficiency___language___internal___type'
  | 'proficiency___parent___id'
  | 'proficiency___parent___parent___id'
  | 'proficiency___parent___parent___children'
  | 'proficiency___parent___children'
  | 'proficiency___parent___children___id'
  | 'proficiency___parent___children___children'
  | 'proficiency___parent___internal___content'
  | 'proficiency___parent___internal___contentDigest'
  | 'proficiency___parent___internal___description'
  | 'proficiency___parent___internal___fieldOwners'
  | 'proficiency___parent___internal___ignoreType'
  | 'proficiency___parent___internal___mediaType'
  | 'proficiency___parent___internal___owner'
  | 'proficiency___parent___internal___type'
  | 'proficiency___children'
  | 'proficiency___children___id'
  | 'proficiency___children___parent___id'
  | 'proficiency___children___parent___children'
  | 'proficiency___children___children'
  | 'proficiency___children___children___id'
  | 'proficiency___children___children___children'
  | 'proficiency___children___internal___content'
  | 'proficiency___children___internal___contentDigest'
  | 'proficiency___children___internal___description'
  | 'proficiency___children___internal___fieldOwners'
  | 'proficiency___children___internal___ignoreType'
  | 'proficiency___children___internal___mediaType'
  | 'proficiency___children___internal___owner'
  | 'proficiency___children___internal___type'
  | 'proficiency___internal___content'
  | 'proficiency___internal___contentDigest'
  | 'proficiency___internal___description'
  | 'proficiency___internal___fieldOwners'
  | 'proficiency___internal___ignoreType'
  | 'proficiency___internal___mediaType'
  | 'proficiency___internal___owner'
  | 'proficiency___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulLanguageFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  proficiency?: Maybe<ContentfulProficiencyFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulLanguageSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulLanguageFilterListInput = {
  elemMatch?: Maybe<ContentfulLanguageFilterInput>;
};

export type ContentfulLanguageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLanguageEdge>;
  nodes: Array<ContentfulLanguage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulLanguageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulLanguageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulLanguageSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulLanguageSysContentType>;
};

export type ContentfulLanguageSysContentType = {
  sys?: Maybe<ContentfulLanguageSysContentTypeSys>;
};

export type ContentfulLanguageSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulLanguageSysContentTypeSysFilterInput>;
};

export type ContentfulLanguageSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulLanguageSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLanguageSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulLanguageSysContentTypeFilterInput>;
};

export type ContentfulLevel = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulLevelSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulLevelCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulLevelUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulLevelConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLevelEdge>;
  nodes: Array<ContentfulLevel>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulLevelGroupConnection>;
};


export type ContentfulLevelConnectionDistinctArgs = {
  field: ContentfulLevelFieldsEnum;
};


export type ContentfulLevelConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulLevelFieldsEnum;
};

export type ContentfulLevelEdge = {
  next?: Maybe<ContentfulLevel>;
  node: ContentfulLevel;
  previous?: Maybe<ContentfulLevel>;
};

export type ContentfulLevelFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'key'
  | 'name'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulLevelFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  key?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulLevelSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulLevelGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLevelEdge>;
  nodes: Array<ContentfulLevel>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulLevelSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulLevelFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulLevelSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulLevelSysContentType>;
};

export type ContentfulLevelSysContentType = {
  sys?: Maybe<ContentfulLevelSysContentTypeSys>;
};

export type ContentfulLevelSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulLevelSysContentTypeSysFilterInput>;
};

export type ContentfulLevelSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulLevelSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLevelSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulLevelSysContentTypeFilterInput>;
};

export type ContentfulProficiency = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulProficiencySys>;
  language?: Maybe<Array<Maybe<ContentfulLanguage>>>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulProficiencyCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulProficiencyUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulProficiencyConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProficiencyEdge>;
  nodes: Array<ContentfulProficiency>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulProficiencyGroupConnection>;
};


export type ContentfulProficiencyConnectionDistinctArgs = {
  field: ContentfulProficiencyFieldsEnum;
};


export type ContentfulProficiencyConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulProficiencyFieldsEnum;
};

export type ContentfulProficiencyEdge = {
  next?: Maybe<ContentfulProficiency>;
  node: ContentfulProficiency;
  previous?: Maybe<ContentfulProficiency>;
};

export type ContentfulProficiencyFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'key'
  | 'name'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'language'
  | 'language___contentful_id'
  | 'language___id'
  | 'language___node_locale'
  | 'language___name'
  | 'language___proficiency___contentful_id'
  | 'language___proficiency___id'
  | 'language___proficiency___node_locale'
  | 'language___proficiency___key'
  | 'language___proficiency___name'
  | 'language___proficiency___spaceId'
  | 'language___proficiency___createdAt'
  | 'language___proficiency___updatedAt'
  | 'language___proficiency___sys___type'
  | 'language___proficiency___sys___revision'
  | 'language___proficiency___language'
  | 'language___proficiency___language___contentful_id'
  | 'language___proficiency___language___id'
  | 'language___proficiency___language___node_locale'
  | 'language___proficiency___language___name'
  | 'language___proficiency___language___spaceId'
  | 'language___proficiency___language___createdAt'
  | 'language___proficiency___language___updatedAt'
  | 'language___proficiency___language___children'
  | 'language___proficiency___parent___id'
  | 'language___proficiency___parent___children'
  | 'language___proficiency___children'
  | 'language___proficiency___children___id'
  | 'language___proficiency___children___children'
  | 'language___proficiency___internal___content'
  | 'language___proficiency___internal___contentDigest'
  | 'language___proficiency___internal___description'
  | 'language___proficiency___internal___fieldOwners'
  | 'language___proficiency___internal___ignoreType'
  | 'language___proficiency___internal___mediaType'
  | 'language___proficiency___internal___owner'
  | 'language___proficiency___internal___type'
  | 'language___spaceId'
  | 'language___createdAt'
  | 'language___updatedAt'
  | 'language___sys___type'
  | 'language___sys___revision'
  | 'language___parent___id'
  | 'language___parent___parent___id'
  | 'language___parent___parent___children'
  | 'language___parent___children'
  | 'language___parent___children___id'
  | 'language___parent___children___children'
  | 'language___parent___internal___content'
  | 'language___parent___internal___contentDigest'
  | 'language___parent___internal___description'
  | 'language___parent___internal___fieldOwners'
  | 'language___parent___internal___ignoreType'
  | 'language___parent___internal___mediaType'
  | 'language___parent___internal___owner'
  | 'language___parent___internal___type'
  | 'language___children'
  | 'language___children___id'
  | 'language___children___parent___id'
  | 'language___children___parent___children'
  | 'language___children___children'
  | 'language___children___children___id'
  | 'language___children___children___children'
  | 'language___children___internal___content'
  | 'language___children___internal___contentDigest'
  | 'language___children___internal___description'
  | 'language___children___internal___fieldOwners'
  | 'language___children___internal___ignoreType'
  | 'language___children___internal___mediaType'
  | 'language___children___internal___owner'
  | 'language___children___internal___type'
  | 'language___internal___content'
  | 'language___internal___contentDigest'
  | 'language___internal___description'
  | 'language___internal___fieldOwners'
  | 'language___internal___ignoreType'
  | 'language___internal___mediaType'
  | 'language___internal___owner'
  | 'language___internal___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulProficiencyFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  key?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulProficiencySysFilterInput>;
  language?: Maybe<ContentfulLanguageFilterListInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulProficiencyGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProficiencyEdge>;
  nodes: Array<ContentfulProficiency>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulProficiencySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulProficiencyFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulProficiencySys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulProficiencySysContentType>;
};

export type ContentfulProficiencySysContentType = {
  sys?: Maybe<ContentfulProficiencySysContentTypeSys>;
};

export type ContentfulProficiencySysContentTypeFilterInput = {
  sys?: Maybe<ContentfulProficiencySysContentTypeSysFilterInput>;
};

export type ContentfulProficiencySysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulProficiencySysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulProficiencySysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulProficiencySysContentTypeFilterInput>;
};

export type ContentfulProject = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ContentfulProjectConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProjectEdge>;
  nodes: Array<ContentfulProject>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulProjectGroupConnection>;
};


export type ContentfulProjectConnectionDistinctArgs = {
  field: ContentfulProjectFieldsEnum;
};


export type ContentfulProjectConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulProjectFieldsEnum;
};

export type ContentfulProjectEdge = {
  next?: Maybe<ContentfulProject>;
  node: ContentfulProject;
  previous?: Maybe<ContentfulProject>;
};

export type ContentfulProjectFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulProjectFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulProjectGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProjectEdge>;
  nodes: Array<ContentfulProject>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulProjectSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulProjectFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulReference = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
};

export type ContentfulReferenceData = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ContentfulReferenceDataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulReferenceDataEdge>;
  nodes: Array<ContentfulReferenceData>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulReferenceDataGroupConnection>;
};


export type ContentfulReferenceDataConnectionDistinctArgs = {
  field: ContentfulReferenceDataFieldsEnum;
};


export type ContentfulReferenceDataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulReferenceDataFieldsEnum;
};

export type ContentfulReferenceDataEdge = {
  next?: Maybe<ContentfulReferenceData>;
  node: ContentfulReferenceData;
  previous?: Maybe<ContentfulReferenceData>;
};

export type ContentfulReferenceDataFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulReferenceDataFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulReferenceDataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulReferenceDataEdge>;
  nodes: Array<ContentfulReferenceData>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulReferenceDataSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulReferenceDataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulResize = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSkill = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ContentfulSkillConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSkillEdge>;
  nodes: Array<ContentfulSkill>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulSkillGroupConnection>;
};


export type ContentfulSkillConnectionDistinctArgs = {
  field: ContentfulSkillFieldsEnum;
};


export type ContentfulSkillConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSkillFieldsEnum;
};

export type ContentfulSkillEdge = {
  next?: Maybe<ContentfulSkill>;
  node: ContentfulSkill;
  previous?: Maybe<ContentfulSkill>;
};

export type ContentfulSkillFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulSkillFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulSkillGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSkillEdge>;
  nodes: Array<ContentfulSkill>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSkillSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSkillFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSocial = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  information?: Maybe<Array<Maybe<ContentfulInformation>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSocialSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulSocialCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulSocialUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulSocialConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSocialEdge>;
  nodes: Array<ContentfulSocial>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulSocialGroupConnection>;
};


export type ContentfulSocialConnectionDistinctArgs = {
  field: ContentfulSocialFieldsEnum;
};


export type ContentfulSocialConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSocialFieldsEnum;
};

export type ContentfulSocialEdge = {
  next?: Maybe<ContentfulSocial>;
  node: ContentfulSocial;
  previous?: Maybe<ContentfulSocial>;
};

export type ContentfulSocialFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'key'
  | 'name'
  | 'username'
  | 'url'
  | 'information'
  | 'information___contentful_id'
  | 'information___id'
  | 'information___node_locale'
  | 'information___name'
  | 'information___shortName'
  | 'information___email'
  | 'information___mobile'
  | 'information___birthday'
  | 'information___definition'
  | 'information___summary___raw'
  | 'information___contentfulid'
  | 'information___images'
  | 'information___images___contentful_id'
  | 'information___images___id'
  | 'information___images___spaceId'
  | 'information___images___createdAt'
  | 'information___images___updatedAt'
  | 'information___images___file___url'
  | 'information___images___file___fileName'
  | 'information___images___file___contentType'
  | 'information___images___title'
  | 'information___images___description'
  | 'information___images___node_locale'
  | 'information___images___sys___type'
  | 'information___images___sys___revision'
  | 'information___images___localFile___sourceInstanceName'
  | 'information___images___localFile___absolutePath'
  | 'information___images___localFile___relativePath'
  | 'information___images___localFile___extension'
  | 'information___images___localFile___size'
  | 'information___images___localFile___prettySize'
  | 'information___images___localFile___modifiedTime'
  | 'information___images___localFile___accessTime'
  | 'information___images___localFile___changeTime'
  | 'information___images___localFile___birthTime'
  | 'information___images___localFile___root'
  | 'information___images___localFile___dir'
  | 'information___images___localFile___base'
  | 'information___images___localFile___ext'
  | 'information___images___localFile___name'
  | 'information___images___localFile___relativeDirectory'
  | 'information___images___localFile___dev'
  | 'information___images___localFile___mode'
  | 'information___images___localFile___nlink'
  | 'information___images___localFile___uid'
  | 'information___images___localFile___gid'
  | 'information___images___localFile___rdev'
  | 'information___images___localFile___ino'
  | 'information___images___localFile___atimeMs'
  | 'information___images___localFile___mtimeMs'
  | 'information___images___localFile___ctimeMs'
  | 'information___images___localFile___atime'
  | 'information___images___localFile___mtime'
  | 'information___images___localFile___ctime'
  | 'information___images___localFile___birthtime'
  | 'information___images___localFile___birthtimeMs'
  | 'information___images___localFile___blksize'
  | 'information___images___localFile___blocks'
  | 'information___images___localFile___url'
  | 'information___images___localFile___publicURL'
  | 'information___images___localFile___id'
  | 'information___images___localFile___children'
  | 'information___images___fixed___base64'
  | 'information___images___fixed___tracedSVG'
  | 'information___images___fixed___aspectRatio'
  | 'information___images___fixed___width'
  | 'information___images___fixed___height'
  | 'information___images___fixed___src'
  | 'information___images___fixed___srcSet'
  | 'information___images___fixed___srcWebp'
  | 'information___images___fixed___srcSetWebp'
  | 'information___images___resolutions___base64'
  | 'information___images___resolutions___tracedSVG'
  | 'information___images___resolutions___aspectRatio'
  | 'information___images___resolutions___width'
  | 'information___images___resolutions___height'
  | 'information___images___resolutions___src'
  | 'information___images___resolutions___srcSet'
  | 'information___images___resolutions___srcWebp'
  | 'information___images___resolutions___srcSetWebp'
  | 'information___images___fluid___base64'
  | 'information___images___fluid___tracedSVG'
  | 'information___images___fluid___aspectRatio'
  | 'information___images___fluid___src'
  | 'information___images___fluid___srcSet'
  | 'information___images___fluid___srcWebp'
  | 'information___images___fluid___srcSetWebp'
  | 'information___images___fluid___sizes'
  | 'information___images___sizes___base64'
  | 'information___images___sizes___tracedSVG'
  | 'information___images___sizes___aspectRatio'
  | 'information___images___sizes___src'
  | 'information___images___sizes___srcSet'
  | 'information___images___sizes___srcWebp'
  | 'information___images___sizes___srcSetWebp'
  | 'information___images___sizes___sizes'
  | 'information___images___resize___base64'
  | 'information___images___resize___tracedSVG'
  | 'information___images___resize___src'
  | 'information___images___resize___width'
  | 'information___images___resize___height'
  | 'information___images___resize___aspectRatio'
  | 'information___images___parent___id'
  | 'information___images___parent___children'
  | 'information___images___children'
  | 'information___images___children___id'
  | 'information___images___children___children'
  | 'information___images___internal___content'
  | 'information___images___internal___contentDigest'
  | 'information___images___internal___description'
  | 'information___images___internal___fieldOwners'
  | 'information___images___internal___ignoreType'
  | 'information___images___internal___mediaType'
  | 'information___images___internal___owner'
  | 'information___images___internal___type'
  | 'information___address___contentful_id'
  | 'information___address___id'
  | 'information___address___node_locale'
  | 'information___address___name'
  | 'information___address___name2'
  | 'information___address___city'
  | 'information___address___country'
  | 'information___address___code'
  | 'information___address___information'
  | 'information___address___information___contentful_id'
  | 'information___address___information___id'
  | 'information___address___information___node_locale'
  | 'information___address___information___name'
  | 'information___address___information___shortName'
  | 'information___address___information___email'
  | 'information___address___information___mobile'
  | 'information___address___information___birthday'
  | 'information___address___information___definition'
  | 'information___address___information___contentfulid'
  | 'information___address___information___images'
  | 'information___address___information___socials'
  | 'information___address___information___spaceId'
  | 'information___address___information___createdAt'
  | 'information___address___information___updatedAt'
  | 'information___address___information___children'
  | 'information___address___spaceId'
  | 'information___address___createdAt'
  | 'information___address___updatedAt'
  | 'information___address___sys___type'
  | 'information___address___sys___revision'
  | 'information___address___parent___id'
  | 'information___address___parent___children'
  | 'information___address___children'
  | 'information___address___children___id'
  | 'information___address___children___children'
  | 'information___address___internal___content'
  | 'information___address___internal___contentDigest'
  | 'information___address___internal___description'
  | 'information___address___internal___fieldOwners'
  | 'information___address___internal___ignoreType'
  | 'information___address___internal___mediaType'
  | 'information___address___internal___owner'
  | 'information___address___internal___type'
  | 'information___socials'
  | 'information___socials___contentful_id'
  | 'information___socials___id'
  | 'information___socials___node_locale'
  | 'information___socials___key'
  | 'information___socials___name'
  | 'information___socials___username'
  | 'information___socials___url'
  | 'information___socials___information'
  | 'information___socials___information___contentful_id'
  | 'information___socials___information___id'
  | 'information___socials___information___node_locale'
  | 'information___socials___information___name'
  | 'information___socials___information___shortName'
  | 'information___socials___information___email'
  | 'information___socials___information___mobile'
  | 'information___socials___information___birthday'
  | 'information___socials___information___definition'
  | 'information___socials___information___contentfulid'
  | 'information___socials___information___images'
  | 'information___socials___information___socials'
  | 'information___socials___information___spaceId'
  | 'information___socials___information___createdAt'
  | 'information___socials___information___updatedAt'
  | 'information___socials___information___children'
  | 'information___socials___spaceId'
  | 'information___socials___createdAt'
  | 'information___socials___updatedAt'
  | 'information___socials___sys___type'
  | 'information___socials___sys___revision'
  | 'information___socials___parent___id'
  | 'information___socials___parent___children'
  | 'information___socials___children'
  | 'information___socials___children___id'
  | 'information___socials___children___children'
  | 'information___socials___internal___content'
  | 'information___socials___internal___contentDigest'
  | 'information___socials___internal___description'
  | 'information___socials___internal___fieldOwners'
  | 'information___socials___internal___ignoreType'
  | 'information___socials___internal___mediaType'
  | 'information___socials___internal___owner'
  | 'information___socials___internal___type'
  | 'information___spaceId'
  | 'information___createdAt'
  | 'information___updatedAt'
  | 'information___sys___type'
  | 'information___sys___revision'
  | 'information___parent___id'
  | 'information___parent___parent___id'
  | 'information___parent___parent___children'
  | 'information___parent___children'
  | 'information___parent___children___id'
  | 'information___parent___children___children'
  | 'information___parent___internal___content'
  | 'information___parent___internal___contentDigest'
  | 'information___parent___internal___description'
  | 'information___parent___internal___fieldOwners'
  | 'information___parent___internal___ignoreType'
  | 'information___parent___internal___mediaType'
  | 'information___parent___internal___owner'
  | 'information___parent___internal___type'
  | 'information___children'
  | 'information___children___id'
  | 'information___children___parent___id'
  | 'information___children___parent___children'
  | 'information___children___children'
  | 'information___children___children___id'
  | 'information___children___children___children'
  | 'information___children___internal___content'
  | 'information___children___internal___contentDigest'
  | 'information___children___internal___description'
  | 'information___children___internal___fieldOwners'
  | 'information___children___internal___ignoreType'
  | 'information___children___internal___mediaType'
  | 'information___children___internal___owner'
  | 'information___children___internal___type'
  | 'information___internal___content'
  | 'information___internal___contentDigest'
  | 'information___internal___description'
  | 'information___internal___fieldOwners'
  | 'information___internal___ignoreType'
  | 'information___internal___mediaType'
  | 'information___internal___owner'
  | 'information___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulSocialFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  key?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  information?: Maybe<ContentfulInformationFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSocialSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulSocialFilterListInput = {
  elemMatch?: Maybe<ContentfulSocialFilterInput>;
};

export type ContentfulSocialGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSocialEdge>;
  nodes: Array<ContentfulSocial>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSocialSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSocialFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSocialSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulSocialSysContentType>;
};

export type ContentfulSocialSysContentType = {
  sys?: Maybe<ContentfulSocialSysContentTypeSys>;
};

export type ContentfulSocialSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulSocialSysContentTypeSysFilterInput>;
};

export type ContentfulSocialSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulSocialSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSocialSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulSocialSysContentTypeFilterInput>;
};

export type ContentfulTag = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  work?: Maybe<Array<Maybe<ContentfulWork>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulTagSys>;
  interest?: Maybe<Array<Maybe<ContentfulInterest>>>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulTagCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulTagUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulTagConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulTagEdge>;
  nodes: Array<ContentfulTag>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulTagGroupConnection>;
};


export type ContentfulTagConnectionDistinctArgs = {
  field: ContentfulTagFieldsEnum;
};


export type ContentfulTagConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulTagFieldsEnum;
};

export type ContentfulTagEdge = {
  next?: Maybe<ContentfulTag>;
  node: ContentfulTag;
  previous?: Maybe<ContentfulTag>;
};

export type ContentfulTagFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'name'
  | 'work'
  | 'work___contentful_id'
  | 'work___id'
  | 'work___node_locale'
  | 'work___position'
  | 'work___company'
  | 'work___website'
  | 'work___startDate'
  | 'work___summary___raw'
  | 'work___highlights'
  | 'work___image___contentful_id'
  | 'work___image___id'
  | 'work___image___spaceId'
  | 'work___image___createdAt'
  | 'work___image___updatedAt'
  | 'work___image___file___url'
  | 'work___image___file___fileName'
  | 'work___image___file___contentType'
  | 'work___image___title'
  | 'work___image___description'
  | 'work___image___node_locale'
  | 'work___image___sys___type'
  | 'work___image___sys___revision'
  | 'work___image___localFile___sourceInstanceName'
  | 'work___image___localFile___absolutePath'
  | 'work___image___localFile___relativePath'
  | 'work___image___localFile___extension'
  | 'work___image___localFile___size'
  | 'work___image___localFile___prettySize'
  | 'work___image___localFile___modifiedTime'
  | 'work___image___localFile___accessTime'
  | 'work___image___localFile___changeTime'
  | 'work___image___localFile___birthTime'
  | 'work___image___localFile___root'
  | 'work___image___localFile___dir'
  | 'work___image___localFile___base'
  | 'work___image___localFile___ext'
  | 'work___image___localFile___name'
  | 'work___image___localFile___relativeDirectory'
  | 'work___image___localFile___dev'
  | 'work___image___localFile___mode'
  | 'work___image___localFile___nlink'
  | 'work___image___localFile___uid'
  | 'work___image___localFile___gid'
  | 'work___image___localFile___rdev'
  | 'work___image___localFile___ino'
  | 'work___image___localFile___atimeMs'
  | 'work___image___localFile___mtimeMs'
  | 'work___image___localFile___ctimeMs'
  | 'work___image___localFile___atime'
  | 'work___image___localFile___mtime'
  | 'work___image___localFile___ctime'
  | 'work___image___localFile___birthtime'
  | 'work___image___localFile___birthtimeMs'
  | 'work___image___localFile___blksize'
  | 'work___image___localFile___blocks'
  | 'work___image___localFile___url'
  | 'work___image___localFile___publicURL'
  | 'work___image___localFile___id'
  | 'work___image___localFile___children'
  | 'work___image___fixed___base64'
  | 'work___image___fixed___tracedSVG'
  | 'work___image___fixed___aspectRatio'
  | 'work___image___fixed___width'
  | 'work___image___fixed___height'
  | 'work___image___fixed___src'
  | 'work___image___fixed___srcSet'
  | 'work___image___fixed___srcWebp'
  | 'work___image___fixed___srcSetWebp'
  | 'work___image___resolutions___base64'
  | 'work___image___resolutions___tracedSVG'
  | 'work___image___resolutions___aspectRatio'
  | 'work___image___resolutions___width'
  | 'work___image___resolutions___height'
  | 'work___image___resolutions___src'
  | 'work___image___resolutions___srcSet'
  | 'work___image___resolutions___srcWebp'
  | 'work___image___resolutions___srcSetWebp'
  | 'work___image___fluid___base64'
  | 'work___image___fluid___tracedSVG'
  | 'work___image___fluid___aspectRatio'
  | 'work___image___fluid___src'
  | 'work___image___fluid___srcSet'
  | 'work___image___fluid___srcWebp'
  | 'work___image___fluid___srcSetWebp'
  | 'work___image___fluid___sizes'
  | 'work___image___sizes___base64'
  | 'work___image___sizes___tracedSVG'
  | 'work___image___sizes___aspectRatio'
  | 'work___image___sizes___src'
  | 'work___image___sizes___srcSet'
  | 'work___image___sizes___srcWebp'
  | 'work___image___sizes___srcSetWebp'
  | 'work___image___sizes___sizes'
  | 'work___image___resize___base64'
  | 'work___image___resize___tracedSVG'
  | 'work___image___resize___src'
  | 'work___image___resize___width'
  | 'work___image___resize___height'
  | 'work___image___resize___aspectRatio'
  | 'work___image___parent___id'
  | 'work___image___parent___children'
  | 'work___image___children'
  | 'work___image___children___id'
  | 'work___image___children___children'
  | 'work___image___internal___content'
  | 'work___image___internal___contentDigest'
  | 'work___image___internal___description'
  | 'work___image___internal___fieldOwners'
  | 'work___image___internal___ignoreType'
  | 'work___image___internal___mediaType'
  | 'work___image___internal___owner'
  | 'work___image___internal___type'
  | 'work___tags'
  | 'work___tags___contentful_id'
  | 'work___tags___id'
  | 'work___tags___node_locale'
  | 'work___tags___name'
  | 'work___tags___work'
  | 'work___tags___work___contentful_id'
  | 'work___tags___work___id'
  | 'work___tags___work___node_locale'
  | 'work___tags___work___position'
  | 'work___tags___work___company'
  | 'work___tags___work___website'
  | 'work___tags___work___startDate'
  | 'work___tags___work___highlights'
  | 'work___tags___work___tags'
  | 'work___tags___work___spaceId'
  | 'work___tags___work___createdAt'
  | 'work___tags___work___updatedAt'
  | 'work___tags___work___children'
  | 'work___tags___spaceId'
  | 'work___tags___createdAt'
  | 'work___tags___updatedAt'
  | 'work___tags___sys___type'
  | 'work___tags___sys___revision'
  | 'work___tags___interest'
  | 'work___tags___interest___contentful_id'
  | 'work___tags___interest___id'
  | 'work___tags___interest___node_locale'
  | 'work___tags___interest___contentfulid'
  | 'work___tags___interest___tags'
  | 'work___tags___interest___spaceId'
  | 'work___tags___interest___createdAt'
  | 'work___tags___interest___updatedAt'
  | 'work___tags___interest___children'
  | 'work___tags___parent___id'
  | 'work___tags___parent___children'
  | 'work___tags___children'
  | 'work___tags___children___id'
  | 'work___tags___children___children'
  | 'work___tags___internal___content'
  | 'work___tags___internal___contentDigest'
  | 'work___tags___internal___description'
  | 'work___tags___internal___fieldOwners'
  | 'work___tags___internal___ignoreType'
  | 'work___tags___internal___mediaType'
  | 'work___tags___internal___owner'
  | 'work___tags___internal___type'
  | 'work___spaceId'
  | 'work___createdAt'
  | 'work___updatedAt'
  | 'work___sys___type'
  | 'work___sys___revision'
  | 'work___parent___id'
  | 'work___parent___parent___id'
  | 'work___parent___parent___children'
  | 'work___parent___children'
  | 'work___parent___children___id'
  | 'work___parent___children___children'
  | 'work___parent___internal___content'
  | 'work___parent___internal___contentDigest'
  | 'work___parent___internal___description'
  | 'work___parent___internal___fieldOwners'
  | 'work___parent___internal___ignoreType'
  | 'work___parent___internal___mediaType'
  | 'work___parent___internal___owner'
  | 'work___parent___internal___type'
  | 'work___children'
  | 'work___children___id'
  | 'work___children___parent___id'
  | 'work___children___parent___children'
  | 'work___children___children'
  | 'work___children___children___id'
  | 'work___children___children___children'
  | 'work___children___internal___content'
  | 'work___children___internal___contentDigest'
  | 'work___children___internal___description'
  | 'work___children___internal___fieldOwners'
  | 'work___children___internal___ignoreType'
  | 'work___children___internal___mediaType'
  | 'work___children___internal___owner'
  | 'work___children___internal___type'
  | 'work___internal___content'
  | 'work___internal___contentDigest'
  | 'work___internal___description'
  | 'work___internal___fieldOwners'
  | 'work___internal___ignoreType'
  | 'work___internal___mediaType'
  | 'work___internal___owner'
  | 'work___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'interest'
  | 'interest___contentful_id'
  | 'interest___id'
  | 'interest___node_locale'
  | 'interest___text___raw'
  | 'interest___contentfulid'
  | 'interest___tags'
  | 'interest___tags___contentful_id'
  | 'interest___tags___id'
  | 'interest___tags___node_locale'
  | 'interest___tags___name'
  | 'interest___tags___work'
  | 'interest___tags___work___contentful_id'
  | 'interest___tags___work___id'
  | 'interest___tags___work___node_locale'
  | 'interest___tags___work___position'
  | 'interest___tags___work___company'
  | 'interest___tags___work___website'
  | 'interest___tags___work___startDate'
  | 'interest___tags___work___highlights'
  | 'interest___tags___work___tags'
  | 'interest___tags___work___spaceId'
  | 'interest___tags___work___createdAt'
  | 'interest___tags___work___updatedAt'
  | 'interest___tags___work___children'
  | 'interest___tags___spaceId'
  | 'interest___tags___createdAt'
  | 'interest___tags___updatedAt'
  | 'interest___tags___sys___type'
  | 'interest___tags___sys___revision'
  | 'interest___tags___interest'
  | 'interest___tags___interest___contentful_id'
  | 'interest___tags___interest___id'
  | 'interest___tags___interest___node_locale'
  | 'interest___tags___interest___contentfulid'
  | 'interest___tags___interest___tags'
  | 'interest___tags___interest___spaceId'
  | 'interest___tags___interest___createdAt'
  | 'interest___tags___interest___updatedAt'
  | 'interest___tags___interest___children'
  | 'interest___tags___parent___id'
  | 'interest___tags___parent___children'
  | 'interest___tags___children'
  | 'interest___tags___children___id'
  | 'interest___tags___children___children'
  | 'interest___tags___internal___content'
  | 'interest___tags___internal___contentDigest'
  | 'interest___tags___internal___description'
  | 'interest___tags___internal___fieldOwners'
  | 'interest___tags___internal___ignoreType'
  | 'interest___tags___internal___mediaType'
  | 'interest___tags___internal___owner'
  | 'interest___tags___internal___type'
  | 'interest___spaceId'
  | 'interest___createdAt'
  | 'interest___updatedAt'
  | 'interest___sys___type'
  | 'interest___sys___revision'
  | 'interest___parent___id'
  | 'interest___parent___parent___id'
  | 'interest___parent___parent___children'
  | 'interest___parent___children'
  | 'interest___parent___children___id'
  | 'interest___parent___children___children'
  | 'interest___parent___internal___content'
  | 'interest___parent___internal___contentDigest'
  | 'interest___parent___internal___description'
  | 'interest___parent___internal___fieldOwners'
  | 'interest___parent___internal___ignoreType'
  | 'interest___parent___internal___mediaType'
  | 'interest___parent___internal___owner'
  | 'interest___parent___internal___type'
  | 'interest___children'
  | 'interest___children___id'
  | 'interest___children___parent___id'
  | 'interest___children___parent___children'
  | 'interest___children___children'
  | 'interest___children___children___id'
  | 'interest___children___children___children'
  | 'interest___children___internal___content'
  | 'interest___children___internal___contentDigest'
  | 'interest___children___internal___description'
  | 'interest___children___internal___fieldOwners'
  | 'interest___children___internal___ignoreType'
  | 'interest___children___internal___mediaType'
  | 'interest___children___internal___owner'
  | 'interest___children___internal___type'
  | 'interest___internal___content'
  | 'interest___internal___contentDigest'
  | 'interest___internal___description'
  | 'interest___internal___fieldOwners'
  | 'interest___internal___ignoreType'
  | 'interest___internal___mediaType'
  | 'interest___internal___owner'
  | 'interest___internal___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulTagFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  work?: Maybe<ContentfulWorkFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulTagSysFilterInput>;
  interest?: Maybe<ContentfulInterestFilterListInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulTagFilterListInput = {
  elemMatch?: Maybe<ContentfulTagFilterInput>;
};

export type ContentfulTagGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulTagEdge>;
  nodes: Array<ContentfulTag>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulTagSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulTagFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulTagSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulTagSysContentType>;
};

export type ContentfulTagSysContentType = {
  sys?: Maybe<ContentfulTagSysContentTypeSys>;
};

export type ContentfulTagSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulTagSysContentTypeSysFilterInput>;
};

export type ContentfulTagSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulTagSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulTagSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulTagSysContentTypeFilterInput>;
};

export type ContentfulVolunteer = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ContentfulVolunteerConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulVolunteerEdge>;
  nodes: Array<ContentfulVolunteer>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulVolunteerGroupConnection>;
};


export type ContentfulVolunteerConnectionDistinctArgs = {
  field: ContentfulVolunteerFieldsEnum;
};


export type ContentfulVolunteerConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulVolunteerFieldsEnum;
};

export type ContentfulVolunteerEdge = {
  next?: Maybe<ContentfulVolunteer>;
  node: ContentfulVolunteer;
  previous?: Maybe<ContentfulVolunteer>;
};

export type ContentfulVolunteerFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulVolunteerFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulVolunteerGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulVolunteerEdge>;
  nodes: Array<ContentfulVolunteer>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulVolunteerSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulVolunteerFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulWork = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  position?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  summary?: Maybe<ContentfulWorkSummary>;
  highlights?: Maybe<Array<Maybe<Scalars['String']>>>;
  image?: Maybe<ContentfulAsset>;
  tags?: Maybe<Array<Maybe<ContentfulTag>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulWorkSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulWorkStartDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulWorkCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulWorkUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulWorkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulWorkEdge>;
  nodes: Array<ContentfulWork>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulWorkGroupConnection>;
};


export type ContentfulWorkConnectionDistinctArgs = {
  field: ContentfulWorkFieldsEnum;
};


export type ContentfulWorkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulWorkFieldsEnum;
};

export type ContentfulWorkEdge = {
  next?: Maybe<ContentfulWork>;
  node: ContentfulWork;
  previous?: Maybe<ContentfulWork>;
};

export type ContentfulWorkFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'position'
  | 'company'
  | 'website'
  | 'startDate'
  | 'summary___raw'
  | 'highlights'
  | 'image___contentful_id'
  | 'image___id'
  | 'image___spaceId'
  | 'image___createdAt'
  | 'image___updatedAt'
  | 'image___file___url'
  | 'image___file___details___size'
  | 'image___file___fileName'
  | 'image___file___contentType'
  | 'image___title'
  | 'image___description'
  | 'image___node_locale'
  | 'image___sys___type'
  | 'image___sys___revision'
  | 'image___localFile___sourceInstanceName'
  | 'image___localFile___absolutePath'
  | 'image___localFile___relativePath'
  | 'image___localFile___extension'
  | 'image___localFile___size'
  | 'image___localFile___prettySize'
  | 'image___localFile___modifiedTime'
  | 'image___localFile___accessTime'
  | 'image___localFile___changeTime'
  | 'image___localFile___birthTime'
  | 'image___localFile___root'
  | 'image___localFile___dir'
  | 'image___localFile___base'
  | 'image___localFile___ext'
  | 'image___localFile___name'
  | 'image___localFile___relativeDirectory'
  | 'image___localFile___dev'
  | 'image___localFile___mode'
  | 'image___localFile___nlink'
  | 'image___localFile___uid'
  | 'image___localFile___gid'
  | 'image___localFile___rdev'
  | 'image___localFile___ino'
  | 'image___localFile___atimeMs'
  | 'image___localFile___mtimeMs'
  | 'image___localFile___ctimeMs'
  | 'image___localFile___atime'
  | 'image___localFile___mtime'
  | 'image___localFile___ctime'
  | 'image___localFile___birthtime'
  | 'image___localFile___birthtimeMs'
  | 'image___localFile___blksize'
  | 'image___localFile___blocks'
  | 'image___localFile___url'
  | 'image___localFile___publicURL'
  | 'image___localFile___childImageSharp___gatsbyImageData'
  | 'image___localFile___childImageSharp___id'
  | 'image___localFile___childImageSharp___children'
  | 'image___localFile___id'
  | 'image___localFile___parent___id'
  | 'image___localFile___parent___children'
  | 'image___localFile___children'
  | 'image___localFile___children___id'
  | 'image___localFile___children___children'
  | 'image___localFile___internal___content'
  | 'image___localFile___internal___contentDigest'
  | 'image___localFile___internal___description'
  | 'image___localFile___internal___fieldOwners'
  | 'image___localFile___internal___ignoreType'
  | 'image___localFile___internal___mediaType'
  | 'image___localFile___internal___owner'
  | 'image___localFile___internal___type'
  | 'image___fixed___base64'
  | 'image___fixed___tracedSVG'
  | 'image___fixed___aspectRatio'
  | 'image___fixed___width'
  | 'image___fixed___height'
  | 'image___fixed___src'
  | 'image___fixed___srcSet'
  | 'image___fixed___srcWebp'
  | 'image___fixed___srcSetWebp'
  | 'image___resolutions___base64'
  | 'image___resolutions___tracedSVG'
  | 'image___resolutions___aspectRatio'
  | 'image___resolutions___width'
  | 'image___resolutions___height'
  | 'image___resolutions___src'
  | 'image___resolutions___srcSet'
  | 'image___resolutions___srcWebp'
  | 'image___resolutions___srcSetWebp'
  | 'image___fluid___base64'
  | 'image___fluid___tracedSVG'
  | 'image___fluid___aspectRatio'
  | 'image___fluid___src'
  | 'image___fluid___srcSet'
  | 'image___fluid___srcWebp'
  | 'image___fluid___srcSetWebp'
  | 'image___fluid___sizes'
  | 'image___sizes___base64'
  | 'image___sizes___tracedSVG'
  | 'image___sizes___aspectRatio'
  | 'image___sizes___src'
  | 'image___sizes___srcSet'
  | 'image___sizes___srcWebp'
  | 'image___sizes___srcSetWebp'
  | 'image___sizes___sizes'
  | 'image___resize___base64'
  | 'image___resize___tracedSVG'
  | 'image___resize___src'
  | 'image___resize___width'
  | 'image___resize___height'
  | 'image___resize___aspectRatio'
  | 'image___parent___id'
  | 'image___parent___parent___id'
  | 'image___parent___parent___children'
  | 'image___parent___children'
  | 'image___parent___children___id'
  | 'image___parent___children___children'
  | 'image___parent___internal___content'
  | 'image___parent___internal___contentDigest'
  | 'image___parent___internal___description'
  | 'image___parent___internal___fieldOwners'
  | 'image___parent___internal___ignoreType'
  | 'image___parent___internal___mediaType'
  | 'image___parent___internal___owner'
  | 'image___parent___internal___type'
  | 'image___children'
  | 'image___children___id'
  | 'image___children___parent___id'
  | 'image___children___parent___children'
  | 'image___children___children'
  | 'image___children___children___id'
  | 'image___children___children___children'
  | 'image___children___internal___content'
  | 'image___children___internal___contentDigest'
  | 'image___children___internal___description'
  | 'image___children___internal___fieldOwners'
  | 'image___children___internal___ignoreType'
  | 'image___children___internal___mediaType'
  | 'image___children___internal___owner'
  | 'image___children___internal___type'
  | 'image___internal___content'
  | 'image___internal___contentDigest'
  | 'image___internal___description'
  | 'image___internal___fieldOwners'
  | 'image___internal___ignoreType'
  | 'image___internal___mediaType'
  | 'image___internal___owner'
  | 'image___internal___type'
  | 'tags'
  | 'tags___contentful_id'
  | 'tags___id'
  | 'tags___node_locale'
  | 'tags___name'
  | 'tags___work'
  | 'tags___work___contentful_id'
  | 'tags___work___id'
  | 'tags___work___node_locale'
  | 'tags___work___position'
  | 'tags___work___company'
  | 'tags___work___website'
  | 'tags___work___startDate'
  | 'tags___work___summary___raw'
  | 'tags___work___highlights'
  | 'tags___work___image___contentful_id'
  | 'tags___work___image___id'
  | 'tags___work___image___spaceId'
  | 'tags___work___image___createdAt'
  | 'tags___work___image___updatedAt'
  | 'tags___work___image___title'
  | 'tags___work___image___description'
  | 'tags___work___image___node_locale'
  | 'tags___work___image___children'
  | 'tags___work___tags'
  | 'tags___work___tags___contentful_id'
  | 'tags___work___tags___id'
  | 'tags___work___tags___node_locale'
  | 'tags___work___tags___name'
  | 'tags___work___tags___work'
  | 'tags___work___tags___spaceId'
  | 'tags___work___tags___createdAt'
  | 'tags___work___tags___updatedAt'
  | 'tags___work___tags___interest'
  | 'tags___work___tags___children'
  | 'tags___work___spaceId'
  | 'tags___work___createdAt'
  | 'tags___work___updatedAt'
  | 'tags___work___sys___type'
  | 'tags___work___sys___revision'
  | 'tags___work___parent___id'
  | 'tags___work___parent___children'
  | 'tags___work___children'
  | 'tags___work___children___id'
  | 'tags___work___children___children'
  | 'tags___work___internal___content'
  | 'tags___work___internal___contentDigest'
  | 'tags___work___internal___description'
  | 'tags___work___internal___fieldOwners'
  | 'tags___work___internal___ignoreType'
  | 'tags___work___internal___mediaType'
  | 'tags___work___internal___owner'
  | 'tags___work___internal___type'
  | 'tags___spaceId'
  | 'tags___createdAt'
  | 'tags___updatedAt'
  | 'tags___sys___type'
  | 'tags___sys___revision'
  | 'tags___interest'
  | 'tags___interest___contentful_id'
  | 'tags___interest___id'
  | 'tags___interest___node_locale'
  | 'tags___interest___text___raw'
  | 'tags___interest___contentfulid'
  | 'tags___interest___tags'
  | 'tags___interest___tags___contentful_id'
  | 'tags___interest___tags___id'
  | 'tags___interest___tags___node_locale'
  | 'tags___interest___tags___name'
  | 'tags___interest___tags___work'
  | 'tags___interest___tags___spaceId'
  | 'tags___interest___tags___createdAt'
  | 'tags___interest___tags___updatedAt'
  | 'tags___interest___tags___interest'
  | 'tags___interest___tags___children'
  | 'tags___interest___spaceId'
  | 'tags___interest___createdAt'
  | 'tags___interest___updatedAt'
  | 'tags___interest___sys___type'
  | 'tags___interest___sys___revision'
  | 'tags___interest___parent___id'
  | 'tags___interest___parent___children'
  | 'tags___interest___children'
  | 'tags___interest___children___id'
  | 'tags___interest___children___children'
  | 'tags___interest___internal___content'
  | 'tags___interest___internal___contentDigest'
  | 'tags___interest___internal___description'
  | 'tags___interest___internal___fieldOwners'
  | 'tags___interest___internal___ignoreType'
  | 'tags___interest___internal___mediaType'
  | 'tags___interest___internal___owner'
  | 'tags___interest___internal___type'
  | 'tags___parent___id'
  | 'tags___parent___parent___id'
  | 'tags___parent___parent___children'
  | 'tags___parent___children'
  | 'tags___parent___children___id'
  | 'tags___parent___children___children'
  | 'tags___parent___internal___content'
  | 'tags___parent___internal___contentDigest'
  | 'tags___parent___internal___description'
  | 'tags___parent___internal___fieldOwners'
  | 'tags___parent___internal___ignoreType'
  | 'tags___parent___internal___mediaType'
  | 'tags___parent___internal___owner'
  | 'tags___parent___internal___type'
  | 'tags___children'
  | 'tags___children___id'
  | 'tags___children___parent___id'
  | 'tags___children___parent___children'
  | 'tags___children___children'
  | 'tags___children___children___id'
  | 'tags___children___children___children'
  | 'tags___children___internal___content'
  | 'tags___children___internal___contentDigest'
  | 'tags___children___internal___description'
  | 'tags___children___internal___fieldOwners'
  | 'tags___children___internal___ignoreType'
  | 'tags___children___internal___mediaType'
  | 'tags___children___internal___owner'
  | 'tags___children___internal___type'
  | 'tags___internal___content'
  | 'tags___internal___contentDigest'
  | 'tags___internal___description'
  | 'tags___internal___fieldOwners'
  | 'tags___internal___ignoreType'
  | 'tags___internal___mediaType'
  | 'tags___internal___owner'
  | 'tags___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulWorkFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  position?: Maybe<StringQueryOperatorInput>;
  company?: Maybe<StringQueryOperatorInput>;
  website?: Maybe<StringQueryOperatorInput>;
  startDate?: Maybe<DateQueryOperatorInput>;
  summary?: Maybe<ContentfulWorkSummaryFilterInput>;
  highlights?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  tags?: Maybe<ContentfulTagFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulWorkSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulWorkFilterListInput = {
  elemMatch?: Maybe<ContentfulWorkFilterInput>;
};

export type ContentfulWorkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulWorkEdge>;
  nodes: Array<ContentfulWork>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulWorkSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulWorkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulWorkSummary = {
  raw?: Maybe<Scalars['String']>;
};

export type ContentfulWorkSummaryFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulWorkSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulWorkSysContentType>;
};

export type ContentfulWorkSysContentType = {
  sys?: Maybe<ContentfulWorkSysContentTypeSys>;
};

export type ContentfulWorkSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulWorkSysContentTypeSysFilterInput>;
};

export type ContentfulWorkSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulWorkSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulWorkSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulWorkSysContentTypeFilterInput>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'url'
  | 'publicURL'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageCropFocus = 
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit = 
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat = 
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ImageLayout = 
  | 'FIXED'
  | 'FLUID'
  | 'CONSTRAINED';

export type ImagePlaceholder = 
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageResizingBehavior = 
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'PAD'
  /** Crop a part of the original image to match the specified size. */
  | 'CROP'
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  | 'FILL'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'THUMB'
  /** Scale the image regardless of the original aspect ratio. */
  | 'SCALE';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  transformOptions?: Maybe<TransformOptions>;
  background?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum = 
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy = 
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  contentfulEntry?: Maybe<ContentfulEntry>;
  allContentfulEntry: ContentfulEntryConnection;
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulInformation?: Maybe<ContentfulInformation>;
  allContentfulInformation: ContentfulInformationConnection;
  contentfulAddress?: Maybe<ContentfulAddress>;
  allContentfulAddress: ContentfulAddressConnection;
  contentfulSocial?: Maybe<ContentfulSocial>;
  allContentfulSocial: ContentfulSocialConnection;
  contentfulLanguage?: Maybe<ContentfulLanguage>;
  allContentfulLanguage: ContentfulLanguageConnection;
  contentfulProficiency?: Maybe<ContentfulProficiency>;
  allContentfulProficiency: ContentfulProficiencyConnection;
  contentfulTag?: Maybe<ContentfulTag>;
  allContentfulTag: ContentfulTagConnection;
  contentfulInterest?: Maybe<ContentfulInterest>;
  allContentfulInterest: ContentfulInterestConnection;
  contentfulProject?: Maybe<ContentfulProject>;
  allContentfulProject: ContentfulProjectConnection;
  contentfulWork?: Maybe<ContentfulWork>;
  allContentfulWork: ContentfulWorkConnection;
  contentfulLevel?: Maybe<ContentfulLevel>;
  allContentfulLevel: ContentfulLevelConnection;
  contentfulSkill?: Maybe<ContentfulSkill>;
  allContentfulSkill: ContentfulSkillConnection;
  contentfulVolunteer?: Maybe<ContentfulVolunteer>;
  allContentfulVolunteer: ContentfulVolunteerConnection;
  contentfulEducationType?: Maybe<ContentfulEducationType>;
  allContentfulEducationType: ContentfulEducationTypeConnection;
  contentfulEducation?: Maybe<ContentfulEducation>;
  allContentfulEducation: ContentfulEducationConnection;
  contentfulReferenceData?: Maybe<ContentfulReferenceData>;
  allContentfulReferenceData: ContentfulReferenceDataConnection;
  contentfulDocument?: Maybe<ContentfulDocument>;
  allContentfulDocument: ContentfulDocumentConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryContentfulEntryArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulEntryArgs = {
  filter?: Maybe<ContentfulEntryFilterInput>;
  sort?: Maybe<ContentfulEntrySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulInformationArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  shortName?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  mobile?: Maybe<StringQueryOperatorInput>;
  birthday?: Maybe<DateQueryOperatorInput>;
  definition?: Maybe<StringQueryOperatorInput>;
  summary?: Maybe<ContentfulInformationSummaryFilterInput>;
  contentfulid?: Maybe<StringQueryOperatorInput>;
  images?: Maybe<ContentfulAssetFilterListInput>;
  address?: Maybe<ContentfulAddressFilterInput>;
  socials?: Maybe<ContentfulSocialFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulInformationSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulInformationArgs = {
  filter?: Maybe<ContentfulInformationFilterInput>;
  sort?: Maybe<ContentfulInformationSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAddressArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  name2?: Maybe<StringQueryOperatorInput>;
  city?: Maybe<StringQueryOperatorInput>;
  country?: Maybe<StringQueryOperatorInput>;
  code?: Maybe<StringQueryOperatorInput>;
  information?: Maybe<ContentfulInformationFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAddressSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulAddressArgs = {
  filter?: Maybe<ContentfulAddressFilterInput>;
  sort?: Maybe<ContentfulAddressSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSocialArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  key?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  information?: Maybe<ContentfulInformationFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSocialSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulSocialArgs = {
  filter?: Maybe<ContentfulSocialFilterInput>;
  sort?: Maybe<ContentfulSocialSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulLanguageArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  proficiency?: Maybe<ContentfulProficiencyFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulLanguageSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulLanguageArgs = {
  filter?: Maybe<ContentfulLanguageFilterInput>;
  sort?: Maybe<ContentfulLanguageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulProficiencyArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  key?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulProficiencySysFilterInput>;
  language?: Maybe<ContentfulLanguageFilterListInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulProficiencyArgs = {
  filter?: Maybe<ContentfulProficiencyFilterInput>;
  sort?: Maybe<ContentfulProficiencySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulTagArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  work?: Maybe<ContentfulWorkFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulTagSysFilterInput>;
  interest?: Maybe<ContentfulInterestFilterListInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulTagArgs = {
  filter?: Maybe<ContentfulTagFilterInput>;
  sort?: Maybe<ContentfulTagSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulInterestArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<ContentfulInterestTextFilterInput>;
  contentfulid?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<ContentfulTagFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulInterestSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulInterestArgs = {
  filter?: Maybe<ContentfulInterestFilterInput>;
  sort?: Maybe<ContentfulInterestSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulProjectArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulProjectArgs = {
  filter?: Maybe<ContentfulProjectFilterInput>;
  sort?: Maybe<ContentfulProjectSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulWorkArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  position?: Maybe<StringQueryOperatorInput>;
  company?: Maybe<StringQueryOperatorInput>;
  website?: Maybe<StringQueryOperatorInput>;
  startDate?: Maybe<DateQueryOperatorInput>;
  summary?: Maybe<ContentfulWorkSummaryFilterInput>;
  highlights?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  tags?: Maybe<ContentfulTagFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulWorkSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulWorkArgs = {
  filter?: Maybe<ContentfulWorkFilterInput>;
  sort?: Maybe<ContentfulWorkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulLevelArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  key?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulLevelSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulLevelArgs = {
  filter?: Maybe<ContentfulLevelFilterInput>;
  sort?: Maybe<ContentfulLevelSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSkillArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulSkillArgs = {
  filter?: Maybe<ContentfulSkillFilterInput>;
  sort?: Maybe<ContentfulSkillSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulVolunteerArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulVolunteerArgs = {
  filter?: Maybe<ContentfulVolunteerFilterInput>;
  sort?: Maybe<ContentfulVolunteerSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulEducationTypeArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  key?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulEducationTypeSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulEducationTypeArgs = {
  filter?: Maybe<ContentfulEducationTypeFilterInput>;
  sort?: Maybe<ContentfulEducationTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulEducationArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulEducationArgs = {
  filter?: Maybe<ContentfulEducationFilterInput>;
  sort?: Maybe<ContentfulEducationSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulReferenceDataArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulReferenceDataArgs = {
  filter?: Maybe<ContentfulReferenceDataFilterInput>;
  sort?: Maybe<ContentfulReferenceDataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulDocumentArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulDocumentSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulDocumentArgs = {
  filter?: Maybe<ContentfulDocumentFilterInput>;
  sort?: Maybe<ContentfulDocumentSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulContentTypeSysFilterInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___shortName'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___default___language'
  | 'siteMetadata___author___name'
  | 'siteMetadata___author___email'
  | 'siteMetadata___author___url'
  | 'siteMetadata___package___name'
  | 'siteMetadata___package___version'
  | 'siteMetadata___env'
  | 'siteMetadata___nodeVersion'
  | 'siteMetadata___npmVersion'
  | 'siteMetadata___yarnVersion'
  | 'siteMetadata___netlify___id'
  | 'siteMetadata___netlify___context'
  | 'siteMetadata___netlify___deployID'
  | 'siteMetadata___git___repo'
  | 'siteMetadata___git___branch'
  | 'siteMetadata___git___commit'
  | 'siteMetadata___git___previousCommit'
  | 'siteMetadata___git___prID'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  link?: Maybe<Scalars['String']>;
  second?: Maybe<Scalars['Int']>;
  intl?: Maybe<SitePageContextIntl>;
  language?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  link?: Maybe<StringQueryOperatorInput>;
  second?: Maybe<IntQueryOperatorInput>;
  intl?: Maybe<SitePageContextIntlFilterInput>;
  language?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextIntl = {
  language?: Maybe<Scalars['String']>;
  defaultLanguage?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;
  messages?: Maybe<SitePageContextIntlMessages>;
  routed?: Maybe<Scalars['Boolean']>;
  originalPath?: Maybe<Scalars['String']>;
  redirect?: Maybe<Scalars['Boolean']>;
};

export type SitePageContextIntlFilterInput = {
  language?: Maybe<StringQueryOperatorInput>;
  defaultLanguage?: Maybe<StringQueryOperatorInput>;
  languages?: Maybe<StringQueryOperatorInput>;
  messages?: Maybe<SitePageContextIntlMessagesFilterInput>;
  routed?: Maybe<BooleanQueryOperatorInput>;
  originalPath?: Maybe<StringQueryOperatorInput>;
  redirect?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePageContextIntlMessages = {
  indexPage_pageName?: Maybe<Scalars['String']>;
  debugPage_pageName?: Maybe<Scalars['String']>;
  debugPage_title?: Maybe<Scalars['String']>;
  debugPage_desc?: Maybe<Scalars['String']>;
};

export type SitePageContextIntlMessagesFilterInput = {
  indexPage_pageName?: Maybe<StringQueryOperatorInput>;
  debugPage_pageName?: Maybe<StringQueryOperatorInput>;
  debugPage_title?: Maybe<StringQueryOperatorInput>;
  debugPage_desc?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___link'
  | 'context___second'
  | 'context___intl___language'
  | 'context___intl___defaultLanguage'
  | 'context___intl___languages'
  | 'context___intl___messages___indexPage_pageName'
  | 'context___intl___messages___debugPage_pageName'
  | 'context___intl___messages___debugPage_title'
  | 'context___intl___messages___debugPage_desc'
  | 'context___intl___routed'
  | 'context___intl___originalPath'
  | 'context___intl___redirect'
  | 'context___language'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___headers____x'
  | 'pluginCreator___pluginOptions___dsn'
  | 'pluginCreator___pluginOptions___enabled'
  | 'pluginCreator___pluginOptions___debug'
  | 'pluginCreator___pluginOptions___environment'
  | 'pluginCreator___pluginOptions___release'
  | 'pluginCreator___pluginOptions___maxBreadcrumbs'
  | 'pluginCreator___pluginOptions___output'
  | 'pluginCreator___pluginOptions___createLinkInHead'
  | 'pluginCreator___pluginOptions___spaceId'
  | 'pluginCreator___pluginOptions___accessToken'
  | 'pluginCreator___pluginOptions___downloadLocal'
  | 'pluginCreator___pluginOptions___host'
  | 'pluginCreator___pluginOptions___forceFullSync'
  | 'pluginCreator___pluginOptions___pageLimit'
  | 'pluginCreator___pluginOptions___assetDownloadWorkers'
  | 'pluginCreator___pluginOptions___useNameForId'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___base64Width'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___crossOrigin'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___codegen'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___documentPaths'
  | 'pluginCreator___pluginOptions___codegenDelay'
  | 'pluginCreator___pluginOptions___id'
  | 'pluginCreator___pluginOptions___includeInDevelopment'
  | 'pluginCreator___pluginOptions___defaultDataLayer___type'
  | 'pluginCreator___pluginOptions___routeChangeEventName'
  | 'pluginCreator___pluginOptions___languages'
  | 'pluginCreator___pluginOptions___defaultLanguage'
  | 'pluginCreator___pluginOptions___redirect'
  | 'pluginCreator___pluginOptions___cssPropOptimization'
  | 'pluginCreator___pluginOptions___sourceMap'
  | 'pluginCreator___pluginOptions___autoLabel'
  | 'pluginCreator___pluginOptions___labelFormat'
  | 'pluginCreator___pluginOptions___projectRoot'
  | 'pluginCreator___pluginOptions___configDir'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___headers____x'
  | 'pluginOptions___dsn'
  | 'pluginOptions___enabled'
  | 'pluginOptions___debug'
  | 'pluginOptions___environment'
  | 'pluginOptions___release'
  | 'pluginOptions___maxBreadcrumbs'
  | 'pluginOptions___output'
  | 'pluginOptions___createLinkInHead'
  | 'pluginOptions___spaceId'
  | 'pluginOptions___accessToken'
  | 'pluginOptions___downloadLocal'
  | 'pluginOptions___host'
  | 'pluginOptions___forceFullSync'
  | 'pluginOptions___pageLimit'
  | 'pluginOptions___assetDownloadWorkers'
  | 'pluginOptions___useNameForId'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___crossOrigin'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___codegen'
  | 'pluginOptions___fileName'
  | 'pluginOptions___documentPaths'
  | 'pluginOptions___codegenDelay'
  | 'pluginOptions___id'
  | 'pluginOptions___includeInDevelopment'
  | 'pluginOptions___defaultDataLayer___type'
  | 'pluginOptions___defaultDataLayer___value___platform'
  | 'pluginOptions___routeChangeEventName'
  | 'pluginOptions___languages'
  | 'pluginOptions___defaultLanguage'
  | 'pluginOptions___redirect'
  | 'pluginOptions___cssPropOptimization'
  | 'pluginOptions___sourceMap'
  | 'pluginOptions___autoLabel'
  | 'pluginOptions___labelFormat'
  | 'pluginOptions___projectRoot'
  | 'pluginOptions___configDir'
  | 'pluginOptions___pathCheck'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  headers?: Maybe<SitePluginPluginOptionsHeaders>;
  dsn?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  debug?: Maybe<Scalars['Boolean']>;
  environment?: Maybe<Scalars['String']>;
  release?: Maybe<Scalars['String']>;
  maxBreadcrumbs?: Maybe<Scalars['Int']>;
  output?: Maybe<Scalars['String']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  downloadLocal?: Maybe<Scalars['Boolean']>;
  host?: Maybe<Scalars['String']>;
  forceFullSync?: Maybe<Scalars['Boolean']>;
  pageLimit?: Maybe<Scalars['Int']>;
  assetDownloadWorkers?: Maybe<Scalars['Int']>;
  useNameForId?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  crossOrigin?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  codegen?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['String']>;
  documentPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  codegenDelay?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  includeInDevelopment?: Maybe<Scalars['Boolean']>;
  defaultDataLayer?: Maybe<SitePluginPluginOptionsDefaultDataLayer>;
  routeChangeEventName?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;
  defaultLanguage?: Maybe<Scalars['String']>;
  redirect?: Maybe<Scalars['Boolean']>;
  cssPropOptimization?: Maybe<Scalars['Boolean']>;
  sourceMap?: Maybe<Scalars['Boolean']>;
  autoLabel?: Maybe<Scalars['String']>;
  labelFormat?: Maybe<Scalars['String']>;
  projectRoot?: Maybe<Scalars['String']>;
  configDir?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsDefaultDataLayer = {
  type?: Maybe<Scalars['String']>;
  value?: Maybe<SitePluginPluginOptionsDefaultDataLayerValue>;
};

export type SitePluginPluginOptionsDefaultDataLayerFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<SitePluginPluginOptionsDefaultDataLayerValueFilterInput>;
};

export type SitePluginPluginOptionsDefaultDataLayerValue = {
  platform?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsDefaultDataLayerValueFilterInput = {
  platform?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  headers?: Maybe<SitePluginPluginOptionsHeadersFilterInput>;
  dsn?: Maybe<StringQueryOperatorInput>;
  enabled?: Maybe<BooleanQueryOperatorInput>;
  debug?: Maybe<BooleanQueryOperatorInput>;
  environment?: Maybe<StringQueryOperatorInput>;
  release?: Maybe<StringQueryOperatorInput>;
  maxBreadcrumbs?: Maybe<IntQueryOperatorInput>;
  output?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  downloadLocal?: Maybe<BooleanQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  forceFullSync?: Maybe<BooleanQueryOperatorInput>;
  pageLimit?: Maybe<IntQueryOperatorInput>;
  assetDownloadWorkers?: Maybe<IntQueryOperatorInput>;
  useNameForId?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  codegen?: Maybe<BooleanQueryOperatorInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  documentPaths?: Maybe<StringQueryOperatorInput>;
  codegenDelay?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  includeInDevelopment?: Maybe<BooleanQueryOperatorInput>;
  defaultDataLayer?: Maybe<SitePluginPluginOptionsDefaultDataLayerFilterInput>;
  routeChangeEventName?: Maybe<StringQueryOperatorInput>;
  languages?: Maybe<StringQueryOperatorInput>;
  defaultLanguage?: Maybe<StringQueryOperatorInput>;
  redirect?: Maybe<BooleanQueryOperatorInput>;
  cssPropOptimization?: Maybe<BooleanQueryOperatorInput>;
  sourceMap?: Maybe<BooleanQueryOperatorInput>;
  autoLabel?: Maybe<StringQueryOperatorInput>;
  labelFormat?: Maybe<StringQueryOperatorInput>;
  projectRoot?: Maybe<StringQueryOperatorInput>;
  configDir?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsHeaders = {
  _x?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsHeadersFilterInput = {
  _x?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  default?: Maybe<SiteSiteMetadataDefault>;
  author?: Maybe<SiteSiteMetadataAuthor>;
  package?: Maybe<SiteSiteMetadataPackage>;
  env?: Maybe<Scalars['String']>;
  nodeVersion?: Maybe<Scalars['String']>;
  npmVersion?: Maybe<Scalars['String']>;
  yarnVersion?: Maybe<Scalars['String']>;
  netlify?: Maybe<SiteSiteMetadataNetlify>;
  git?: Maybe<SiteSiteMetadataGit>;
};

export type SiteSiteMetadataAuthor = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataAuthorFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataDefault = {
  language?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataDefaultFilterInput = {
  language?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  shortName?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  default?: Maybe<SiteSiteMetadataDefaultFilterInput>;
  author?: Maybe<SiteSiteMetadataAuthorFilterInput>;
  package?: Maybe<SiteSiteMetadataPackageFilterInput>;
  env?: Maybe<StringQueryOperatorInput>;
  nodeVersion?: Maybe<StringQueryOperatorInput>;
  npmVersion?: Maybe<StringQueryOperatorInput>;
  yarnVersion?: Maybe<StringQueryOperatorInput>;
  netlify?: Maybe<SiteSiteMetadataNetlifyFilterInput>;
  git?: Maybe<SiteSiteMetadataGitFilterInput>;
};

export type SiteSiteMetadataGit = {
  repo?: Maybe<Scalars['String']>;
  branch?: Maybe<Scalars['String']>;
  commit?: Maybe<Scalars['String']>;
  previousCommit?: Maybe<Scalars['String']>;
  prID?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataGitFilterInput = {
  repo?: Maybe<StringQueryOperatorInput>;
  branch?: Maybe<StringQueryOperatorInput>;
  commit?: Maybe<StringQueryOperatorInput>;
  previousCommit?: Maybe<StringQueryOperatorInput>;
  prID?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataNetlify = {
  id?: Maybe<Scalars['String']>;
  context?: Maybe<Scalars['String']>;
  deployID?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataNetlifyFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  context?: Maybe<StringQueryOperatorInput>;
  deployID?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataPackage = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataPackageFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type DefaultLayoutQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type DefaultLayoutQueryQuery = { site?: Maybe<{ siteMetadata?: Maybe<(
      Pick<SiteSiteMetadata, 'title' | 'description'>
      & { default?: Maybe<Pick<SiteSiteMetadataDefault, 'language'>> }
    )> }> };

export type DebugQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type DebugQueryQuery = { site?: Maybe<(
    Pick<Site, 'buildTime'>
    & { siteMetadata?: Maybe<(
      Pick<SiteSiteMetadata, 'env' | 'nodeVersion' | 'npmVersion' | 'yarnVersion'>
      & { package?: Maybe<Pick<SiteSiteMetadataPackage, 'name' | 'version'>>, netlify?: Maybe<Pick<SiteSiteMetadataNetlify, 'id' | 'deployID' | 'context'>>, git?: Maybe<Pick<SiteSiteMetadataGit, 'repo' | 'branch' | 'commit' | 'previousCommit' | 'prID'>> }
    )> }
  )> };

export type IndexPageQueryQueryVariables = Exact<{
  language?: Maybe<Scalars['String']>;
}>;


export type IndexPageQueryQuery = { information?: Maybe<(
    Pick<ContentfulInformation, 'name' | 'shortName' | 'definition'>
    & { summary?: Maybe<Pick<ContentfulInformationSummary, 'raw'>>, images?: Maybe<Array<Maybe<(
      Pick<ContentfulAsset, 'id' | 'title'>
      & { fluid?: Maybe<GatsbyContentfulFluid_WithWebpFragment> }
    )>>>, socials?: Maybe<Array<Maybe<Pick<ContentfulSocial, 'key' | 'name' | 'username' | 'url'>>>> }
  )> };

export type GatsbyContentfulFixedFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_TracedSvgFragment = Pick<ContentfulFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_WithWebpFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFixed_WithWebp_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFluidFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_TracedSvgFragment = Pick<ContentfulFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebpFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebp_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulResolutionsFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_TracedSvgFragment = Pick<ContentfulResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_WithWebpFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulResolutions_WithWebp_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulSizesFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_TracedSvgFragment = Pick<ContentfulSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebpFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebp_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type DataQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type DataQueryQuery = { social: { accounts: Array<Pick<ContentfulSocial, 'name' | 'url'>> }, file: { documents: Array<(
      Pick<ContentfulDocument, 'name'>
      & { file?: Maybe<{ data?: Maybe<Pick<ContentfulAssetFile, 'url'>> }> }
    )> } };
