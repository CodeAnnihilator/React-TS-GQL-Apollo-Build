import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  getPeindngUsersRegistration: Array<PendingUsersCompanies>;
  getCountAnswers: CountAnswersData;
  getCountries: Array<Countries>;
  getCurrentUser: UserDetails;
  getKpiValues: Array<KpiValues>;
  getRegisteredCompanies: Array<RegisteredUsersCompanies>;
  getSiteServicesApprovaled: SiteServiceApprovaledData;
  getIndustries: Array<Industries>;
  me: User;
  getCompanyGroups: Array<ServiceGroup>;
  getCompanyGroupServices: Array<CompanyGroupService>;
  getService: Array<Service>;
  getCompaniesToApproval: Array<CompaniesToApprovalData>;
  getApprovalData: ApprovalData;
  getPendingToApproval: Array<PendingToApprovalSiteManagerData>;
  getAdminComment: AdminCommentData;
  getUserSites: Array<Site>;
  users: Array<User>;
  user: User;
  getUserData: UserDetails;
  hasToken: Scalars['Boolean'];
  getListOfLanguages: Array<ListOfLanguages>;
};


export type QueryGetKpiValuesArgs = {
  serviceName?: Maybe<Scalars['String']>;
};


export type QueryGetRegisteredCompaniesArgs = {
  params: ReqRegisteredUsersCompanies;
};


export type QueryGetSiteServicesApprovaledArgs = {
  siteName: Scalars['String'];
};


export type QueryGetCompanyGroupServicesArgs = {
  groupId: Scalars['Float'];
};


export type QueryGetServiceArgs = {
  params: ServiceData;
};


export type QueryGetCompaniesToApprovalArgs = {
  status: Scalars['String'];
};


export type QueryGetApprovalDataArgs = {
  sitePendingDataRequestId: Scalars['Float'];
};


export type QueryGetAdminCommentArgs = {
  siteGroupServiceId: Scalars['Float'];
};


export type QueryUsersArgs = {
  roles?: Maybe<Array<UserRole>>;
};


export type QueryUserArgs = {
  id: Scalars['Float'];
};


export type QueryGetUserDataArgs = {
  userId: Scalars['Float'];
};


export type QueryHasTokenArgs = {
  token: Scalars['String'];
};

export type PendingUsersCompanies = {
  __typename?: 'PendingUsersCompanies';
  id: Scalars['Float'];
  industryName: Scalars['String'];
  companyName: Scalars['String'];
  email: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CountAnswersData = {
  __typename?: 'CountAnswersData';
  answered: Scalars['Float'];
  total: Scalars['Float'];
  errors: Scalars['Float'];
};

export type Countries = {
  __typename?: 'Countries';
  name: Scalars['String'];
  code: Scalars['String'];
};

export type UserDetails = {
  __typename?: 'UserDetails';
  user: User;
  site: Site;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  fullName: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  language: Language;
  company: Company;
  role: Role;
  email: Scalars['String'];
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['Float'];
  name: Scalars['String'];
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['Float'];
  siteName?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  industry?: Maybe<IndustryTranslation>;
};

export type IndustryTranslation = {
  __typename?: 'IndustryTranslation';
  industryId: Scalars['Float'];
  name: Scalars['String'];
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['Float'];
  label: Scalars['String'];
};

export type Site = {
  __typename?: 'Site';
  id: Scalars['Float'];
  name: Scalars['String'];
  employeesNumber?: Maybe<Scalars['Float']>;
  country?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
};

export type KpiValues = {
  __typename?: 'KpiValues';
  math: Array<MathDetails>;
  groupServiceDetails: GroupServiceDetails;
  data: Array<DataDetails>;
};

export type MathDetails = {
  __typename?: 'MathDetails';
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  avg?: Maybe<Scalars['Float']>;
  median?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

export type GroupServiceDetails = {
  __typename?: 'GroupServiceDetails';
  id: Scalars['Float'];
  service: ServiceDetails;
  group: Group;
  numerator: NumeratorDetails;
  counter: CounterDetails;
};

export type ServiceDetails = {
  __typename?: 'ServiceDetails';
  id: Scalars['Float'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type Group = {
  __typename?: 'Group';
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type NumeratorDetails = {
  __typename?: 'NumeratorDetails';
  numeratorId: Scalars['Float'];
  name: Scalars['String'];
};

export type CounterDetails = {
  __typename?: 'CounterDetails';
  counterId: Scalars['Float'];
  name: Scalars['String'];
};

export type DataDetails = {
  __typename?: 'DataDetails';
  site: Site;
  isSelectedSiteCurrentUser: Scalars['Boolean'];
  kpiDetails: KpiValue;
  degreeofOutsourcingDetails: DegreeofOutsourcingValue;
};

export type KpiValue = {
  __typename?: 'KpiValue';
  id: Scalars['Float'];
  value: Scalars['Float'];
};

export type DegreeofOutsourcingValue = {
  __typename?: 'DegreeofOutsourcingValue';
  id: Scalars['Float'];
  value: Scalars['Float'];
};

export type ReqRegisteredUsersCompanies = {
  offset?: Maybe<Scalars['Float']>;
  limit?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
};

export type RegisteredUsersCompanies = {
  __typename?: 'RegisteredUsersCompanies';
  id: Scalars['Float'];
  industryName: Scalars['String'];
  companyName: Scalars['String'];
  postalCode: Scalars['String'];
  siteName: Scalars['String'];
  email: Scalars['String'];
  employeesNumber: Scalars['Float'];
  userId: Scalars['Float'];
};

export type SiteServiceApprovaledData = {
  __typename?: 'SiteServiceApprovaledData';
  userId?: Maybe<Scalars['Float']>;
  sites?: Maybe<Array<Site>>;
  servicesApprovaledData?: Maybe<Array<ServicesApprovaledData>>;
};

export type ServicesApprovaledData = {
  __typename?: 'ServicesApprovaledData';
  serviceGroupDetails: ServiceGroupDetails;
  data: Array<CalculatedData>;
};

export type ServiceGroupDetails = {
  __typename?: 'ServiceGroupDetails';
  id: Scalars['Float'];
  sitePendingDataRequestId: Scalars['Float'];
  siteGroupServiceId: Scalars['Float'];
  serviceName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  groupName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
};

export type CalculatedData = {
  __typename?: 'CalculatedData';
  id?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  avg?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  label: Scalars['String'];
};

export type Industries = {
  __typename?: 'Industries';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type ServiceGroup = {
  __typename?: 'ServiceGroup';
  groupId: Scalars['Float'];
  serviceGroupName: Scalars['String'];
  servicesCount: Scalars['Float'];
  hasError: Scalars['Boolean'];
};

export type CompanyGroupService = {
  __typename?: 'CompanyGroupService';
  serviceId: Scalars['Float'];
  groupId?: Maybe<Scalars['Float']>;
  serviceName: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  status: ExcelDataStatus;
  label: Scalars['String'];
};

export enum ExcelDataStatus {
  Approval = 'approval',
  WasApproved = 'wasApproved',
  Error = 'error',
  NotSubmittedYet = 'notSubmittedYet'
}

export type ServiceData = {
  groupId: Scalars['Float'];
  serviceId: Scalars['Float'];
};

export type Service = {
  __typename?: 'Service';
  id: Scalars['Float'];
  rawFieldId: Scalars['Float'];
  groupId: Scalars['Float'];
  serviceId: Scalars['Float'];
  groupServiceId: Scalars['Float'];
  value?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
};

export type CompaniesToApprovalData = {
  __typename?: 'CompaniesToApprovalData';
  sitePendingDataRequestId: Scalars['Float'];
  companyName: Scalars['String'];
  industryName: Scalars['String'];
  groupName: Scalars['String'];
  serviceName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  email: Scalars['String'];
  userId: Scalars['Float'];
};

export type ApprovalData = {
  __typename?: 'ApprovalData';
  sitePendingDataRequestId?: Maybe<Scalars['Float']>;
  siteGroupServiceId?: Maybe<Scalars['Float']>;
  serviceName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  groupName?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  data?: Maybe<Array<CalculatedData>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PendingToApprovalSiteManagerData = {
  __typename?: 'PendingToApprovalSiteManagerData';
  siteGroupServiceId: Scalars['Float'];
  groupName: Scalars['String'];
  serviceId: Scalars['Float'];
  groupId: Scalars['Float'];
  serviceName: Scalars['String'];
  submissionDate: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type AdminCommentData = {
  __typename?: 'AdminCommentData';
  id: Scalars['Float'];
  comment?: Maybe<Scalars['String']>;
};

export enum UserRole {
  SuperAdmin = 'superAdmin',
  Producer = 'producer'
}

export type ListOfLanguages = {
  __typename?: 'ListOfLanguages';
  code: Scalars['Float'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  loginUser: AuthResult;
  changeStatusCompany: RegisteredUsersCompanies;
  uploadExcel: Array<Array<UploadedData>>;
  requestToRegister: Scalars['Boolean'];
  changeStatusApprovalData: CompaniesToApprovalData;
  updateAdminComment: AdminCommentData;
  switchSite: SiteDetailsData;
  getNewAccessToken: Token;
  updateServiceValue: Scalars['Boolean'];
  registerUser: AuthResult;
  addCompany: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  addSiteDetails: SiteDetailsData;
  updatePassword: Scalars['Boolean'];
  changeUserAndCompanyData: Scalars['Boolean'];
  changePassword: Scalars['Boolean'];
  logOut: Scalars['Boolean'];
  changeUserLanguage: User;
  resendInvite: Array<PendingUsersCompanies>;
  isOldPassword: Scalars['Boolean'];
};


export type MutationLoginUserArgs = {
  params: LoginUserInput;
};


export type MutationChangeStatusCompanyArgs = {
  params: ReqChangeStatusCompany;
};


export type MutationUploadExcelArgs = {
  file: Scalars['String'];
};


export type MutationRequestToRegisterArgs = {
  params: RandomUserParams;
};


export type MutationChangeStatusApprovalDataArgs = {
  params: ReqChangeStatusApprovalData;
};


export type MutationUpdateAdminCommentArgs = {
  params: UpdateAdminCommentData;
};


export type MutationSwitchSiteArgs = {
  siteId: Scalars['Float'];
};


export type MutationGetNewAccessTokenArgs = {
  params: Scalars['String'];
};


export type MutationUpdateServiceValueArgs = {
  params: Array<Array<ReqServices>>;
};


export type MutationRegisterUserArgs = {
  params: RegisterUserParams;
};


export type MutationAddCompanyArgs = {
  params: AddCompanyData;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationAddSiteDetailsArgs = {
  params: AddSiteData;
};


export type MutationUpdatePasswordArgs = {
  params: UpdatePassword;
};


export type MutationChangeUserAndCompanyDataArgs = {
  params: ReqUserAndCompanyData;
};


export type MutationChangePasswordArgs = {
  password: Scalars['String'];
};


export type MutationChangeUserLanguageArgs = {
  code: Scalars['Float'];
};


export type MutationResendInviteArgs = {
  userId: Scalars['Float'];
};


export type MutationIsOldPasswordArgs = {
  password: Scalars['String'];
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type AuthResult = {
  __typename?: 'AuthResult';
  token: Scalars['String'];
  isInitialData: Scalars['Boolean'];
};

export type ReqChangeStatusCompany = {
  userId: Scalars['Float'];
  status: Scalars['String'];
};

export type UploadedData = {
  __typename?: 'UploadedData';
  id: Scalars['Float'];
  rawFieldId: Scalars['Float'];
  groupId: Scalars['Float'];
  groupServiceId: Scalars['Float'];
  serviceId: Scalars['Float'];
  value?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
};

export type RandomUserParams = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  userEmail: Scalars['String'];
  companyName: Scalars['String'];
};

export type ReqChangeStatusApprovalData = {
  reqChangeStatusApprovalData: Scalars['Float'];
  status: Scalars['String'];
};

export type UpdateAdminCommentData = {
  siteGroupServiceId: Scalars['Float'];
  text: Scalars['String'];
};

export type SiteDetailsData = {
  __typename?: 'SiteDetailsData';
  site: Site;
  groups: Array<ServiceGroup>;
};

export type Token = {
  __typename?: 'Token';
  token: Scalars['String'];
};

export type ReqServices = {
  id: Scalars['Float'];
  groupId: Scalars['Float'];
  serviceId: Scalars['Float'];
  rawFieldId: Scalars['Float'];
  groupServiceId: Scalars['Float'];
  value?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
};

export type RegisterUserParams = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  language: UserLanguage;
  token: Scalars['String'];
};

export enum UserLanguage {
  En = 'en',
  Ge = 'ge'
}

export type AddCompanyData = {
  email: Scalars['String'];
  industryName: Scalars['String'];
  companyName: Scalars['String'];
  language: UserLanguage;
};

export type AddSiteData = {
  employeesNumber: Scalars['Float'];
  country: Scalars['String'];
  city: Scalars['String'];
  postalCode: Scalars['String'];
  siteName: Scalars['String'];
};

export type UpdatePassword = {
  token: Scalars['String'];
  password: Scalars['String'];
};

export type ReqUserAndCompanyData = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  employeesNumber?: Maybe<Scalars['Float']>;
  country?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  siteName?: Maybe<Scalars['String']>;
};

export type RegistrationStatus = {
  __typename?: 'RegistrationStatus';
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type ReservedDomain = {
  __typename?: 'ReservedDomain';
  id: Scalars['Float'];
  name: Scalars['String'];
  createdAt: Scalars['DateTime'];
};

export type UserRegistrationStatus = {
  __typename?: 'UserRegistrationStatus';
  user: User;
  registrationStatus: RegistrationStatus;
  reservedDomain: ReservedDomain;
  updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  token: Scalars['String'];
};

export type UpdateServiceValue = {
  __typename?: 'UpdateServiceValue';
  siteGroupServiceId: Scalars['Float'];
  isSubmit: Scalars['String'];
};

export type RestorePasswordInput = {
  email: Scalars['String'];
};

export type RestorePasswordConfirmInput = {
  token: Scalars['String'];
  password: Scalars['String'];
};

export type LoginUserMutationVariables = Exact<{
  params: LoginUserInput;
}>;


export type LoginUserMutation = (
  { __typename?: 'Mutation' }
  & { loginUser: (
    { __typename?: 'AuthResult' }
    & Pick<AuthResult, 'token' | 'isInitialData'>
  ) }
);

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = (
  { __typename?: 'Query' }
  & { getCurrentUser: (
    { __typename?: 'UserDetails' }
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'firstName' | 'lastName' | 'email'>
      & { role: (
        { __typename?: 'Role' }
        & Pick<Role, 'id' | 'label'>
      ), company: (
        { __typename?: 'Company' }
        & Pick<Company, 'id' | 'name'>
        & { industry?: Maybe<(
          { __typename?: 'IndustryTranslation' }
          & Pick<IndustryTranslation, 'name'>
        )> }
      ), language: (
        { __typename?: 'Language' }
        & Pick<Language, 'code' | 'name'>
      ) }
    ), site: (
      { __typename?: 'Site' }
      & Pick<Site, 'id' | 'name' | 'employeesNumber' | 'country' | 'city' | 'postalCode'>
    ) }
  ) }
);

export type GetCompanyGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompanyGroupsQuery = (
  { __typename?: 'Query' }
  & { getCompanyGroups: Array<(
    { __typename?: 'ServiceGroup' }
    & Pick<ServiceGroup, 'groupId' | 'serviceGroupName' | 'servicesCount' | 'hasError'>
  )> }
);


export const LoginUserDocument = gql`
    mutation loginUser($params: LoginUserInput!) {
  loginUser(params: $params) {
    token
    isInitialData
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, baseOptions);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const GetCurrentUserDocument = gql`
    query getCurrentUser {
  getCurrentUser {
    user {
      id
      firstName
      lastName
      email
      role {
        id
        label
      }
      email
      company {
        id
        name
        industry {
          name
        }
      }
      language {
        code
        name
      }
    }
    site {
      id
      name
      employeesNumber
      country
      city
      postalCode
    }
  }
}
    `;

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
        return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, baseOptions);
      }
export function useGetCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
          return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, baseOptions);
        }
export type GetCurrentUserQueryHookResult = ReturnType<typeof useGetCurrentUserQuery>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<typeof useGetCurrentUserLazyQuery>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const GetCompanyGroupsDocument = gql`
    query getCompanyGroups {
  getCompanyGroups {
    groupId
    serviceGroupName
    servicesCount
    hasError
  }
}
    `;

/**
 * __useGetCompanyGroupsQuery__
 *
 * To run a query within a React component, call `useGetCompanyGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyGroupsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCompanyGroupsQuery(baseOptions?: Apollo.QueryHookOptions<GetCompanyGroupsQuery, GetCompanyGroupsQueryVariables>) {
        return Apollo.useQuery<GetCompanyGroupsQuery, GetCompanyGroupsQueryVariables>(GetCompanyGroupsDocument, baseOptions);
      }
export function useGetCompanyGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompanyGroupsQuery, GetCompanyGroupsQueryVariables>) {
          return Apollo.useLazyQuery<GetCompanyGroupsQuery, GetCompanyGroupsQueryVariables>(GetCompanyGroupsDocument, baseOptions);
        }
export type GetCompanyGroupsQueryHookResult = ReturnType<typeof useGetCompanyGroupsQuery>;
export type GetCompanyGroupsLazyQueryHookResult = ReturnType<typeof useGetCompanyGroupsLazyQuery>;
export type GetCompanyGroupsQueryResult = Apollo.QueryResult<GetCompanyGroupsQuery, GetCompanyGroupsQueryVariables>;