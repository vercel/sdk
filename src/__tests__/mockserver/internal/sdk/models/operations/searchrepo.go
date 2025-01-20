// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"errors"
	"fmt"
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
)

type NamespaceIDType string

const (
	NamespaceIDTypeStr    NamespaceIDType = "str"
	NamespaceIDTypeNumber NamespaceIDType = "number"
)

type NamespaceID struct {
	Str    *string
	Number *float64

	Type NamespaceIDType
}

func CreateNamespaceIDStr(str string) NamespaceID {
	typ := NamespaceIDTypeStr

	return NamespaceID{
		Str:  &str,
		Type: typ,
	}
}

func CreateNamespaceIDNumber(number float64) NamespaceID {
	typ := NamespaceIDTypeNumber

	return NamespaceID{
		Number: &number,
		Type:   typ,
	}
}

func (u *NamespaceID) UnmarshalJSON(data []byte) error {

	var str string = ""
	if err := utils.UnmarshalJSON(data, &str, "", true, true); err == nil {
		u.Str = &str
		u.Type = NamespaceIDTypeStr
		return nil
	}

	var number float64 = float64(0)
	if err := utils.UnmarshalJSON(data, &number, "", true, true); err == nil {
		u.Number = &number
		u.Type = NamespaceIDTypeNumber
		return nil
	}

	return fmt.Errorf("could not unmarshal `%s` into any supported union types for NamespaceID", string(data))
}

func (u NamespaceID) MarshalJSON() ([]byte, error) {
	if u.Str != nil {
		return utils.MarshalJSON(u.Str, "", true)
	}

	if u.Number != nil {
		return utils.MarshalJSON(u.Number, "", true)
	}

	return nil, errors.New("could not marshal union type NamespaceID: all fields are null")
}

type QueryParamProvider string

const (
	QueryParamProviderGithub           QueryParamProvider = "github"
	QueryParamProviderGithubCustomHost QueryParamProvider = "github-custom-host"
	QueryParamProviderGitlab           QueryParamProvider = "gitlab"
	QueryParamProviderBitbucket        QueryParamProvider = "bitbucket"
)

func (e QueryParamProvider) ToPointer() *QueryParamProvider {
	return &e
}
func (e *QueryParamProvider) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "github":
		fallthrough
	case "github-custom-host":
		fallthrough
	case "gitlab":
		fallthrough
	case "bitbucket":
		*e = QueryParamProvider(v)
		return nil
	default:
		return fmt.Errorf("invalid value for QueryParamProvider: %v", v)
	}
}

type SearchRepoRequest struct {
	Query          *string             `queryParam:"style=form,explode=true,name=query"`
	NamespaceID    *NamespaceID        `queryParam:"style=form,explode=true,name=namespaceId"`
	Provider       *QueryParamProvider `queryParam:"style=form,explode=true,name=provider"`
	InstallationID *string             `queryParam:"style=form,explode=true,name=installationId"`
	// The custom Git host if using a custom Git provider, like GitHub Enterprise Server
	Host *string `queryParam:"style=form,explode=true,name=host"`
	// The Team identifier to perform the request on behalf of.
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
	// The Team slug to perform the request on behalf of.
	Slug *string `queryParam:"style=form,explode=true,name=slug"`
}

func (o *SearchRepoRequest) GetQuery() *string {
	if o == nil {
		return nil
	}
	return o.Query
}

func (o *SearchRepoRequest) GetNamespaceID() *NamespaceID {
	if o == nil {
		return nil
	}
	return o.NamespaceID
}

func (o *SearchRepoRequest) GetProvider() *QueryParamProvider {
	if o == nil {
		return nil
	}
	return o.Provider
}

func (o *SearchRepoRequest) GetInstallationID() *string {
	if o == nil {
		return nil
	}
	return o.InstallationID
}

func (o *SearchRepoRequest) GetHost() *string {
	if o == nil {
		return nil
	}
	return o.Host
}

func (o *SearchRepoRequest) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *SearchRepoRequest) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

type ResponseBodyProvider string

const (
	ResponseBodyProviderGithub           ResponseBodyProvider = "github"
	ResponseBodyProviderGithubCustomHost ResponseBodyProvider = "github-custom-host"
	ResponseBodyProviderGitlab           ResponseBodyProvider = "gitlab"
	ResponseBodyProviderBitbucket        ResponseBodyProvider = "bitbucket"
)

func (e ResponseBodyProvider) ToPointer() *ResponseBodyProvider {
	return &e
}
func (e *ResponseBodyProvider) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "github":
		fallthrough
	case "github-custom-host":
		fallthrough
	case "gitlab":
		fallthrough
	case "bitbucket":
		*e = ResponseBodyProvider(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ResponseBodyProvider: %v", v)
	}
}

type ResponseBodyNamespaceIDType string

const (
	ResponseBodyNamespaceIDTypeStr    ResponseBodyNamespaceIDType = "str"
	ResponseBodyNamespaceIDTypeNumber ResponseBodyNamespaceIDType = "number"
)

type ResponseBodyNamespaceID struct {
	Str    *string
	Number *float64

	Type ResponseBodyNamespaceIDType
}

func CreateResponseBodyNamespaceIDStr(str string) ResponseBodyNamespaceID {
	typ := ResponseBodyNamespaceIDTypeStr

	return ResponseBodyNamespaceID{
		Str:  &str,
		Type: typ,
	}
}

func CreateResponseBodyNamespaceIDNumber(number float64) ResponseBodyNamespaceID {
	typ := ResponseBodyNamespaceIDTypeNumber

	return ResponseBodyNamespaceID{
		Number: &number,
		Type:   typ,
	}
}

func (u *ResponseBodyNamespaceID) UnmarshalJSON(data []byte) error {

	var str string = ""
	if err := utils.UnmarshalJSON(data, &str, "", true, true); err == nil {
		u.Str = &str
		u.Type = ResponseBodyNamespaceIDTypeStr
		return nil
	}

	var number float64 = float64(0)
	if err := utils.UnmarshalJSON(data, &number, "", true, true); err == nil {
		u.Number = &number
		u.Type = ResponseBodyNamespaceIDTypeNumber
		return nil
	}

	return fmt.Errorf("could not unmarshal `%s` into any supported union types for ResponseBodyNamespaceID", string(data))
}

func (u ResponseBodyNamespaceID) MarshalJSON() ([]byte, error) {
	if u.Str != nil {
		return utils.MarshalJSON(u.Str, "", true)
	}

	if u.Number != nil {
		return utils.MarshalJSON(u.Number, "", true)
	}

	return nil, errors.New("could not marshal union type ResponseBodyNamespaceID: all fields are null")
}

type GitAccount struct {
	Provider    ResponseBodyProvider     `json:"provider"`
	NamespaceID *ResponseBodyNamespaceID `json:"namespaceId"`
}

func (o *GitAccount) GetProvider() ResponseBodyProvider {
	if o == nil {
		return ResponseBodyProvider("")
	}
	return o.Provider
}

func (o *GitAccount) GetNamespaceID() *ResponseBodyNamespaceID {
	if o == nil {
		return nil
	}
	return o.NamespaceID
}

type ResponseBodyIDType string

const (
	ResponseBodyIDTypeStr    ResponseBodyIDType = "str"
	ResponseBodyIDTypeNumber ResponseBodyIDType = "number"
)

type ResponseBodyID struct {
	Str    *string
	Number *float64

	Type ResponseBodyIDType
}

func CreateResponseBodyIDStr(str string) ResponseBodyID {
	typ := ResponseBodyIDTypeStr

	return ResponseBodyID{
		Str:  &str,
		Type: typ,
	}
}

func CreateResponseBodyIDNumber(number float64) ResponseBodyID {
	typ := ResponseBodyIDTypeNumber

	return ResponseBodyID{
		Number: &number,
		Type:   typ,
	}
}

func (u *ResponseBodyID) UnmarshalJSON(data []byte) error {

	var str string = ""
	if err := utils.UnmarshalJSON(data, &str, "", true, true); err == nil {
		u.Str = &str
		u.Type = ResponseBodyIDTypeStr
		return nil
	}

	var number float64 = float64(0)
	if err := utils.UnmarshalJSON(data, &number, "", true, true); err == nil {
		u.Number = &number
		u.Type = ResponseBodyIDTypeNumber
		return nil
	}

	return fmt.Errorf("could not unmarshal `%s` into any supported union types for ResponseBodyID", string(data))
}

func (u ResponseBodyID) MarshalJSON() ([]byte, error) {
	if u.Str != nil {
		return utils.MarshalJSON(u.Str, "", true)
	}

	if u.Number != nil {
		return utils.MarshalJSON(u.Number, "", true)
	}

	return nil, errors.New("could not marshal union type ResponseBodyID: all fields are null")
}

type SearchRepoResponseBodyProvider string

const (
	SearchRepoResponseBodyProviderGithub           SearchRepoResponseBodyProvider = "github"
	SearchRepoResponseBodyProviderGithubCustomHost SearchRepoResponseBodyProvider = "github-custom-host"
	SearchRepoResponseBodyProviderGitlab           SearchRepoResponseBodyProvider = "gitlab"
	SearchRepoResponseBodyProviderBitbucket        SearchRepoResponseBodyProvider = "bitbucket"
)

func (e SearchRepoResponseBodyProvider) ToPointer() *SearchRepoResponseBodyProvider {
	return &e
}
func (e *SearchRepoResponseBodyProvider) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "github":
		fallthrough
	case "github-custom-host":
		fallthrough
	case "gitlab":
		fallthrough
	case "bitbucket":
		*e = SearchRepoResponseBodyProvider(v)
		return nil
	default:
		return fmt.Errorf("invalid value for SearchRepoResponseBodyProvider: %v", v)
	}
}

type SearchRepoResponseBodyIDType string

const (
	SearchRepoResponseBodyIDTypeStr    SearchRepoResponseBodyIDType = "str"
	SearchRepoResponseBodyIDTypeNumber SearchRepoResponseBodyIDType = "number"
)

type SearchRepoResponseBodyID struct {
	Str    *string
	Number *float64

	Type SearchRepoResponseBodyIDType
}

func CreateSearchRepoResponseBodyIDStr(str string) SearchRepoResponseBodyID {
	typ := SearchRepoResponseBodyIDTypeStr

	return SearchRepoResponseBodyID{
		Str:  &str,
		Type: typ,
	}
}

func CreateSearchRepoResponseBodyIDNumber(number float64) SearchRepoResponseBodyID {
	typ := SearchRepoResponseBodyIDTypeNumber

	return SearchRepoResponseBodyID{
		Number: &number,
		Type:   typ,
	}
}

func (u *SearchRepoResponseBodyID) UnmarshalJSON(data []byte) error {

	var str string = ""
	if err := utils.UnmarshalJSON(data, &str, "", true, true); err == nil {
		u.Str = &str
		u.Type = SearchRepoResponseBodyIDTypeStr
		return nil
	}

	var number float64 = float64(0)
	if err := utils.UnmarshalJSON(data, &number, "", true, true); err == nil {
		u.Number = &number
		u.Type = SearchRepoResponseBodyIDTypeNumber
		return nil
	}

	return fmt.Errorf("could not unmarshal `%s` into any supported union types for SearchRepoResponseBodyID", string(data))
}

func (u SearchRepoResponseBodyID) MarshalJSON() ([]byte, error) {
	if u.Str != nil {
		return utils.MarshalJSON(u.Str, "", true)
	}

	if u.Number != nil {
		return utils.MarshalJSON(u.Number, "", true)
	}

	return nil, errors.New("could not marshal union type SearchRepoResponseBodyID: all fields are null")
}

type Owner struct {
	ID   SearchRepoResponseBodyID `json:"id"`
	Name string                   `json:"name"`
}

func (o *Owner) GetID() SearchRepoResponseBodyID {
	if o == nil {
		return SearchRepoResponseBodyID{}
	}
	return o.ID
}

func (o *Owner) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

type ResponseBodyOwnerType string

const (
	ResponseBodyOwnerTypeUser ResponseBodyOwnerType = "user"
	ResponseBodyOwnerTypeTeam ResponseBodyOwnerType = "team"
)

func (e ResponseBodyOwnerType) ToPointer() *ResponseBodyOwnerType {
	return &e
}
func (e *ResponseBodyOwnerType) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "user":
		fallthrough
	case "team":
		*e = ResponseBodyOwnerType(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ResponseBodyOwnerType: %v", v)
	}
}

type Repos struct {
	ID            ResponseBodyID                 `json:"id"`
	Provider      SearchRepoResponseBodyProvider `json:"provider"`
	URL           string                         `json:"url"`
	Name          string                         `json:"name"`
	Slug          string                         `json:"slug"`
	Namespace     string                         `json:"namespace"`
	Owner         Owner                          `json:"owner"`
	OwnerType     ResponseBodyOwnerType          `json:"ownerType"`
	Private       bool                           `json:"private"`
	DefaultBranch string                         `json:"defaultBranch"`
	UpdatedAt     float64                        `json:"updatedAt"`
}

func (o *Repos) GetID() ResponseBodyID {
	if o == nil {
		return ResponseBodyID{}
	}
	return o.ID
}

func (o *Repos) GetProvider() SearchRepoResponseBodyProvider {
	if o == nil {
		return SearchRepoResponseBodyProvider("")
	}
	return o.Provider
}

func (o *Repos) GetURL() string {
	if o == nil {
		return ""
	}
	return o.URL
}

func (o *Repos) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

func (o *Repos) GetSlug() string {
	if o == nil {
		return ""
	}
	return o.Slug
}

func (o *Repos) GetNamespace() string {
	if o == nil {
		return ""
	}
	return o.Namespace
}

func (o *Repos) GetOwner() Owner {
	if o == nil {
		return Owner{}
	}
	return o.Owner
}

func (o *Repos) GetOwnerType() ResponseBodyOwnerType {
	if o == nil {
		return ResponseBodyOwnerType("")
	}
	return o.OwnerType
}

func (o *Repos) GetPrivate() bool {
	if o == nil {
		return false
	}
	return o.Private
}

func (o *Repos) GetDefaultBranch() string {
	if o == nil {
		return ""
	}
	return o.DefaultBranch
}

func (o *Repos) GetUpdatedAt() float64 {
	if o == nil {
		return 0.0
	}
	return o.UpdatedAt
}

type SearchRepoResponseBody2 struct {
	GitAccount GitAccount `json:"gitAccount"`
	Repos      []Repos    `json:"repos"`
}

func (o *SearchRepoResponseBody2) GetGitAccount() GitAccount {
	if o == nil {
		return GitAccount{}
	}
	return o.GitAccount
}

func (o *SearchRepoResponseBody2) GetRepos() []Repos {
	if o == nil {
		return []Repos{}
	}
	return o.Repos
}

type SearchRepoResponseBody1 struct {
}

type SearchRepoResponseBodyType string

const (
	SearchRepoResponseBodyTypeSearchRepoResponseBody1 SearchRepoResponseBodyType = "searchRepo_responseBody_1"
	SearchRepoResponseBodyTypeSearchRepoResponseBody2 SearchRepoResponseBodyType = "searchRepo_responseBody_2"
)

type SearchRepoResponseBody struct {
	SearchRepoResponseBody1 *SearchRepoResponseBody1
	SearchRepoResponseBody2 *SearchRepoResponseBody2

	Type SearchRepoResponseBodyType
}

func CreateSearchRepoResponseBodySearchRepoResponseBody1(searchRepoResponseBody1 SearchRepoResponseBody1) SearchRepoResponseBody {
	typ := SearchRepoResponseBodyTypeSearchRepoResponseBody1

	return SearchRepoResponseBody{
		SearchRepoResponseBody1: &searchRepoResponseBody1,
		Type:                    typ,
	}
}

func CreateSearchRepoResponseBodySearchRepoResponseBody2(searchRepoResponseBody2 SearchRepoResponseBody2) SearchRepoResponseBody {
	typ := SearchRepoResponseBodyTypeSearchRepoResponseBody2

	return SearchRepoResponseBody{
		SearchRepoResponseBody2: &searchRepoResponseBody2,
		Type:                    typ,
	}
}

func (u *SearchRepoResponseBody) UnmarshalJSON(data []byte) error {

	var searchRepoResponseBody1 SearchRepoResponseBody1 = SearchRepoResponseBody1{}
	if err := utils.UnmarshalJSON(data, &searchRepoResponseBody1, "", true, true); err == nil {
		u.SearchRepoResponseBody1 = &searchRepoResponseBody1
		u.Type = SearchRepoResponseBodyTypeSearchRepoResponseBody1
		return nil
	}

	var searchRepoResponseBody2 SearchRepoResponseBody2 = SearchRepoResponseBody2{}
	if err := utils.UnmarshalJSON(data, &searchRepoResponseBody2, "", true, true); err == nil {
		u.SearchRepoResponseBody2 = &searchRepoResponseBody2
		u.Type = SearchRepoResponseBodyTypeSearchRepoResponseBody2
		return nil
	}

	return fmt.Errorf("could not unmarshal `%s` into any supported union types for SearchRepoResponseBody", string(data))
}

func (u SearchRepoResponseBody) MarshalJSON() ([]byte, error) {
	if u.SearchRepoResponseBody1 != nil {
		return utils.MarshalJSON(u.SearchRepoResponseBody1, "", true)
	}

	if u.SearchRepoResponseBody2 != nil {
		return utils.MarshalJSON(u.SearchRepoResponseBody2, "", true)
	}

	return nil, errors.New("could not marshal union type SearchRepoResponseBody: all fields are null")
}

type SearchRepoResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	OneOf    *SearchRepoResponseBody
}

func (o *SearchRepoResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *SearchRepoResponse) GetOneOf() *SearchRepoResponseBody {
	if o == nil {
		return nil
	}
	return o.OneOf
}