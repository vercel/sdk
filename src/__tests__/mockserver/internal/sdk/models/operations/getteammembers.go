// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"errors"
	"fmt"
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
)

// QueryParamRole - Only return members with the specified team role.
type QueryParamRole string

const (
	QueryParamRoleOwner       QueryParamRole = "OWNER"
	QueryParamRoleMember      QueryParamRole = "MEMBER"
	QueryParamRoleDeveloper   QueryParamRole = "DEVELOPER"
	QueryParamRoleViewer      QueryParamRole = "VIEWER"
	QueryParamRoleBilling     QueryParamRole = "BILLING"
	QueryParamRoleContributor QueryParamRole = "CONTRIBUTOR"
)

func (e QueryParamRole) ToPointer() *QueryParamRole {
	return &e
}
func (e *QueryParamRole) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "OWNER":
		fallthrough
	case "MEMBER":
		fallthrough
	case "DEVELOPER":
		fallthrough
	case "VIEWER":
		fallthrough
	case "BILLING":
		fallthrough
	case "CONTRIBUTOR":
		*e = QueryParamRole(v)
		return nil
	default:
		return fmt.Errorf("invalid value for QueryParamRole: %v", v)
	}
}

type GetTeamMembersRequest struct {
	// Limit how many teams should be returned
	Limit *float64 `queryParam:"style=form,explode=true,name=limit"`
	// Timestamp in milliseconds to only include members added since then.
	Since *float64 `queryParam:"style=form,explode=true,name=since"`
	// Timestamp in milliseconds to only include members added until then.
	Until *float64 `queryParam:"style=form,explode=true,name=until"`
	// Search team members by their name, username, and email.
	Search *string `queryParam:"style=form,explode=true,name=search"`
	// Only return members with the specified team role.
	Role *QueryParamRole `queryParam:"style=form,explode=true,name=role"`
	// Exclude members who belong to the specified project.
	ExcludeProject *string `queryParam:"style=form,explode=true,name=excludeProject"`
	// Include team members who are eligible to be members of the specified project.
	EligibleMembersForProjectID *string `queryParam:"style=form,explode=true,name=eligibleMembersForProjectId"`
}

func (o *GetTeamMembersRequest) GetLimit() *float64 {
	if o == nil {
		return nil
	}
	return o.Limit
}

func (o *GetTeamMembersRequest) GetSince() *float64 {
	if o == nil {
		return nil
	}
	return o.Since
}

func (o *GetTeamMembersRequest) GetUntil() *float64 {
	if o == nil {
		return nil
	}
	return o.Until
}

func (o *GetTeamMembersRequest) GetSearch() *string {
	if o == nil {
		return nil
	}
	return o.Search
}

func (o *GetTeamMembersRequest) GetRole() *QueryParamRole {
	if o == nil {
		return nil
	}
	return o.Role
}

func (o *GetTeamMembersRequest) GetExcludeProject() *string {
	if o == nil {
		return nil
	}
	return o.ExcludeProject
}

func (o *GetTeamMembersRequest) GetEligibleMembersForProjectID() *string {
	if o == nil {
		return nil
	}
	return o.EligibleMembersForProjectID
}

// GetTeamMembersGithub - Information about the GitHub account for this user.
type GetTeamMembersGithub struct {
	Login *string `json:"login,omitempty"`
}

func (o *GetTeamMembersGithub) GetLogin() *string {
	if o == nil {
		return nil
	}
	return o.Login
}

// GetTeamMembersGitlab - Information about the GitLab account of this user.
type GetTeamMembersGitlab struct {
	Login *string `json:"login,omitempty"`
}

func (o *GetTeamMembersGitlab) GetLogin() *string {
	if o == nil {
		return nil
	}
	return o.Login
}

// GetTeamMembersBitbucket - Information about the Bitbucket account of this user.
type GetTeamMembersBitbucket struct {
	Login *string `json:"login,omitempty"`
}

func (o *GetTeamMembersBitbucket) GetLogin() *string {
	if o == nil {
		return nil
	}
	return o.Login
}

// GetTeamMembersRole - Role of this user in the team.
type GetTeamMembersRole string

const (
	GetTeamMembersRoleOwner       GetTeamMembersRole = "OWNER"
	GetTeamMembersRoleMember      GetTeamMembersRole = "MEMBER"
	GetTeamMembersRoleDeveloper   GetTeamMembersRole = "DEVELOPER"
	GetTeamMembersRoleViewer      GetTeamMembersRole = "VIEWER"
	GetTeamMembersRoleBilling     GetTeamMembersRole = "BILLING"
	GetTeamMembersRoleContributor GetTeamMembersRole = "CONTRIBUTOR"
	GetTeamMembersRoleSecurity    GetTeamMembersRole = "SECURITY"
)

func (e GetTeamMembersRole) ToPointer() *GetTeamMembersRole {
	return &e
}
func (e *GetTeamMembersRole) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "OWNER":
		fallthrough
	case "MEMBER":
		fallthrough
	case "DEVELOPER":
		fallthrough
	case "VIEWER":
		fallthrough
	case "BILLING":
		fallthrough
	case "CONTRIBUTOR":
		fallthrough
	case "SECURITY":
		*e = GetTeamMembersRole(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetTeamMembersRole: %v", v)
	}
}

type GetTeamMembersOrigin string

const (
	GetTeamMembersOriginTeams             GetTeamMembersOrigin = "teams"
	GetTeamMembersOriginLink              GetTeamMembersOrigin = "link"
	GetTeamMembersOriginSaml              GetTeamMembersOrigin = "saml"
	GetTeamMembersOriginGithub            GetTeamMembersOrigin = "github"
	GetTeamMembersOriginGitlab            GetTeamMembersOrigin = "gitlab"
	GetTeamMembersOriginBitbucket         GetTeamMembersOrigin = "bitbucket"
	GetTeamMembersOriginMail              GetTeamMembersOrigin = "mail"
	GetTeamMembersOriginImport            GetTeamMembersOrigin = "import"
	GetTeamMembersOriginDsync             GetTeamMembersOrigin = "dsync"
	GetTeamMembersOriginFeedback          GetTeamMembersOrigin = "feedback"
	GetTeamMembersOriginOrganizationTeams GetTeamMembersOrigin = "organization-teams"
)

func (e GetTeamMembersOrigin) ToPointer() *GetTeamMembersOrigin {
	return &e
}
func (e *GetTeamMembersOrigin) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "teams":
		fallthrough
	case "link":
		fallthrough
	case "saml":
		fallthrough
	case "github":
		fallthrough
	case "gitlab":
		fallthrough
	case "bitbucket":
		fallthrough
	case "mail":
		fallthrough
	case "import":
		fallthrough
	case "dsync":
		fallthrough
	case "feedback":
		fallthrough
	case "organization-teams":
		*e = GetTeamMembersOrigin(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetTeamMembersOrigin: %v", v)
	}
}

type GetTeamMembersGitUserIDType string

const (
	GetTeamMembersGitUserIDTypeStr    GetTeamMembersGitUserIDType = "str"
	GetTeamMembersGitUserIDTypeNumber GetTeamMembersGitUserIDType = "number"
)

type GetTeamMembersGitUserID struct {
	Str    *string
	Number *float64

	Type GetTeamMembersGitUserIDType
}

func CreateGetTeamMembersGitUserIDStr(str string) GetTeamMembersGitUserID {
	typ := GetTeamMembersGitUserIDTypeStr

	return GetTeamMembersGitUserID{
		Str:  &str,
		Type: typ,
	}
}

func CreateGetTeamMembersGitUserIDNumber(number float64) GetTeamMembersGitUserID {
	typ := GetTeamMembersGitUserIDTypeNumber

	return GetTeamMembersGitUserID{
		Number: &number,
		Type:   typ,
	}
}

func (u *GetTeamMembersGitUserID) UnmarshalJSON(data []byte) error {

	var str string = ""
	if err := utils.UnmarshalJSON(data, &str, "", true, true); err == nil {
		u.Str = &str
		u.Type = GetTeamMembersGitUserIDTypeStr
		return nil
	}

	var number float64 = float64(0)
	if err := utils.UnmarshalJSON(data, &number, "", true, true); err == nil {
		u.Number = &number
		u.Type = GetTeamMembersGitUserIDTypeNumber
		return nil
	}

	return fmt.Errorf("could not unmarshal `%s` into any supported union types for GetTeamMembersGitUserID", string(data))
}

func (u GetTeamMembersGitUserID) MarshalJSON() ([]byte, error) {
	if u.Str != nil {
		return utils.MarshalJSON(u.Str, "", true)
	}

	if u.Number != nil {
		return utils.MarshalJSON(u.Number, "", true)
	}

	return nil, errors.New("could not marshal union type GetTeamMembersGitUserID: all fields are null")
}

// GetTeamMembersJoinedFrom - Map with information about the members origin if they joined by requesting access.
type GetTeamMembersJoinedFrom struct {
	Origin           GetTeamMembersOrigin     `json:"origin"`
	CommitID         *string                  `json:"commitId,omitempty"`
	RepoID           *string                  `json:"repoId,omitempty"`
	RepoPath         *string                  `json:"repoPath,omitempty"`
	GitUserID        *GetTeamMembersGitUserID `json:"gitUserId,omitempty"`
	GitUserLogin     *string                  `json:"gitUserLogin,omitempty"`
	SsoUserID        *string                  `json:"ssoUserId,omitempty"`
	SsoConnectedAt   *float64                 `json:"ssoConnectedAt,omitempty"`
	IdpUserID        *string                  `json:"idpUserId,omitempty"`
	DsyncUserID      *string                  `json:"dsyncUserId,omitempty"`
	DsyncConnectedAt *float64                 `json:"dsyncConnectedAt,omitempty"`
}

func (o *GetTeamMembersJoinedFrom) GetOrigin() GetTeamMembersOrigin {
	if o == nil {
		return GetTeamMembersOrigin("")
	}
	return o.Origin
}

func (o *GetTeamMembersJoinedFrom) GetCommitID() *string {
	if o == nil {
		return nil
	}
	return o.CommitID
}

func (o *GetTeamMembersJoinedFrom) GetRepoID() *string {
	if o == nil {
		return nil
	}
	return o.RepoID
}

func (o *GetTeamMembersJoinedFrom) GetRepoPath() *string {
	if o == nil {
		return nil
	}
	return o.RepoPath
}

func (o *GetTeamMembersJoinedFrom) GetGitUserID() *GetTeamMembersGitUserID {
	if o == nil {
		return nil
	}
	return o.GitUserID
}

func (o *GetTeamMembersJoinedFrom) GetGitUserLogin() *string {
	if o == nil {
		return nil
	}
	return o.GitUserLogin
}

func (o *GetTeamMembersJoinedFrom) GetSsoUserID() *string {
	if o == nil {
		return nil
	}
	return o.SsoUserID
}

func (o *GetTeamMembersJoinedFrom) GetSsoConnectedAt() *float64 {
	if o == nil {
		return nil
	}
	return o.SsoConnectedAt
}

func (o *GetTeamMembersJoinedFrom) GetIdpUserID() *string {
	if o == nil {
		return nil
	}
	return o.IdpUserID
}

func (o *GetTeamMembersJoinedFrom) GetDsyncUserID() *string {
	if o == nil {
		return nil
	}
	return o.DsyncUserID
}

func (o *GetTeamMembersJoinedFrom) GetDsyncConnectedAt() *float64 {
	if o == nil {
		return nil
	}
	return o.DsyncConnectedAt
}

type GetTeamMembersTeamsResponseRole string

const (
	GetTeamMembersTeamsResponseRoleAdmin            GetTeamMembersTeamsResponseRole = "ADMIN"
	GetTeamMembersTeamsResponseRoleProjectDeveloper GetTeamMembersTeamsResponseRole = "PROJECT_DEVELOPER"
	GetTeamMembersTeamsResponseRoleProjectViewer    GetTeamMembersTeamsResponseRole = "PROJECT_VIEWER"
)

func (e GetTeamMembersTeamsResponseRole) ToPointer() *GetTeamMembersTeamsResponseRole {
	return &e
}
func (e *GetTeamMembersTeamsResponseRole) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "ADMIN":
		fallthrough
	case "PROJECT_DEVELOPER":
		fallthrough
	case "PROJECT_VIEWER":
		*e = GetTeamMembersTeamsResponseRole(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetTeamMembersTeamsResponseRole: %v", v)
	}
}

// GetTeamMembersProjects - Array of project memberships
type GetTeamMembersProjects struct {
	Name *string                          `json:"name,omitempty"`
	ID   *string                          `json:"id,omitempty"`
	Role *GetTeamMembersTeamsResponseRole `json:"role,omitempty"`
}

func (o *GetTeamMembersProjects) GetName() *string {
	if o == nil {
		return nil
	}
	return o.Name
}

func (o *GetTeamMembersProjects) GetID() *string {
	if o == nil {
		return nil
	}
	return o.ID
}

func (o *GetTeamMembersProjects) GetRole() *GetTeamMembersTeamsResponseRole {
	if o == nil {
		return nil
	}
	return o.Role
}

type GetTeamMembersMembers struct {
	// ID of the file for the Avatar of this member.
	Avatar *string `json:"avatar,omitempty"`
	// Boolean that indicates if this member was confirmed by an owner.
	Confirmed bool `json:"confirmed"`
	// The email of this member.
	Email string `json:"email"`
	// Information about the GitHub account for this user.
	Github *GetTeamMembersGithub `json:"github,omitempty"`
	// Information about the GitLab account of this user.
	Gitlab *GetTeamMembersGitlab `json:"gitlab,omitempty"`
	// Information about the Bitbucket account of this user.
	Bitbucket *GetTeamMembersBitbucket `json:"bitbucket,omitempty"`
	// Role of this user in the team.
	Role GetTeamMembersRole `json:"role"`
	// The ID of this user.
	UID string `json:"uid"`
	// The unique username of this user.
	Username string `json:"username"`
	// The name of this user.
	Name *string `json:"name,omitempty"`
	// Timestamp in milliseconds when this member was added.
	CreatedAt float64 `json:"createdAt"`
	// Timestamp in milliseconds for when this team member was accepted by an owner.
	AccessRequestedAt *float64 `json:"accessRequestedAt,omitempty"`
	// Map with information about the members origin if they joined by requesting access.
	JoinedFrom *GetTeamMembersJoinedFrom `json:"joinedFrom,omitempty"`
	// Array of project memberships
	Projects []GetTeamMembersProjects `json:"projects,omitempty"`
}

func (o *GetTeamMembersMembers) GetAvatar() *string {
	if o == nil {
		return nil
	}
	return o.Avatar
}

func (o *GetTeamMembersMembers) GetConfirmed() bool {
	if o == nil {
		return false
	}
	return o.Confirmed
}

func (o *GetTeamMembersMembers) GetEmail() string {
	if o == nil {
		return ""
	}
	return o.Email
}

func (o *GetTeamMembersMembers) GetGithub() *GetTeamMembersGithub {
	if o == nil {
		return nil
	}
	return o.Github
}

func (o *GetTeamMembersMembers) GetGitlab() *GetTeamMembersGitlab {
	if o == nil {
		return nil
	}
	return o.Gitlab
}

func (o *GetTeamMembersMembers) GetBitbucket() *GetTeamMembersBitbucket {
	if o == nil {
		return nil
	}
	return o.Bitbucket
}

func (o *GetTeamMembersMembers) GetRole() GetTeamMembersRole {
	if o == nil {
		return GetTeamMembersRole("")
	}
	return o.Role
}

func (o *GetTeamMembersMembers) GetUID() string {
	if o == nil {
		return ""
	}
	return o.UID
}

func (o *GetTeamMembersMembers) GetUsername() string {
	if o == nil {
		return ""
	}
	return o.Username
}

func (o *GetTeamMembersMembers) GetName() *string {
	if o == nil {
		return nil
	}
	return o.Name
}

func (o *GetTeamMembersMembers) GetCreatedAt() float64 {
	if o == nil {
		return 0.0
	}
	return o.CreatedAt
}

func (o *GetTeamMembersMembers) GetAccessRequestedAt() *float64 {
	if o == nil {
		return nil
	}
	return o.AccessRequestedAt
}

func (o *GetTeamMembersMembers) GetJoinedFrom() *GetTeamMembersJoinedFrom {
	if o == nil {
		return nil
	}
	return o.JoinedFrom
}

func (o *GetTeamMembersMembers) GetProjects() []GetTeamMembersProjects {
	if o == nil {
		return nil
	}
	return o.Projects
}

type GetTeamMembersTeamsRole string

const (
	GetTeamMembersTeamsRoleOwner       GetTeamMembersTeamsRole = "OWNER"
	GetTeamMembersTeamsRoleMember      GetTeamMembersTeamsRole = "MEMBER"
	GetTeamMembersTeamsRoleDeveloper   GetTeamMembersTeamsRole = "DEVELOPER"
	GetTeamMembersTeamsRoleViewer      GetTeamMembersTeamsRole = "VIEWER"
	GetTeamMembersTeamsRoleBilling     GetTeamMembersTeamsRole = "BILLING"
	GetTeamMembersTeamsRoleContributor GetTeamMembersTeamsRole = "CONTRIBUTOR"
	GetTeamMembersTeamsRoleSecurity    GetTeamMembersTeamsRole = "SECURITY"
)

func (e GetTeamMembersTeamsRole) ToPointer() *GetTeamMembersTeamsRole {
	return &e
}
func (e *GetTeamMembersTeamsRole) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "OWNER":
		fallthrough
	case "MEMBER":
		fallthrough
	case "DEVELOPER":
		fallthrough
	case "VIEWER":
		fallthrough
	case "BILLING":
		fallthrough
	case "CONTRIBUTOR":
		fallthrough
	case "SECURITY":
		*e = GetTeamMembersTeamsRole(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetTeamMembersTeamsRole: %v", v)
	}
}

type GetTeamMembersTeamsProjects string

const (
	GetTeamMembersTeamsProjectsAdmin            GetTeamMembersTeamsProjects = "ADMIN"
	GetTeamMembersTeamsProjectsProjectDeveloper GetTeamMembersTeamsProjects = "PROJECT_DEVELOPER"
	GetTeamMembersTeamsProjectsProjectViewer    GetTeamMembersTeamsProjects = "PROJECT_VIEWER"
)

func (e GetTeamMembersTeamsProjects) ToPointer() *GetTeamMembersTeamsProjects {
	return &e
}
func (e *GetTeamMembersTeamsProjects) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "ADMIN":
		fallthrough
	case "PROJECT_DEVELOPER":
		fallthrough
	case "PROJECT_VIEWER":
		*e = GetTeamMembersTeamsProjects(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetTeamMembersTeamsProjects: %v", v)
	}
}

type EmailInviteCodes struct {
	AccessGroups []string                               `json:"accessGroups,omitempty"`
	ID           string                                 `json:"id"`
	Email        *string                                `json:"email,omitempty"`
	Role         *GetTeamMembersTeamsRole               `json:"role,omitempty"`
	IsDSyncUser  bool                                   `json:"isDSyncUser"`
	CreatedAt    *float64                               `json:"createdAt,omitempty"`
	Expired      *bool                                  `json:"expired,omitempty"`
	Projects     map[string]GetTeamMembersTeamsProjects `json:"projects,omitempty"`
	Entitlements []string                               `json:"entitlements,omitempty"`
}

func (o *EmailInviteCodes) GetAccessGroups() []string {
	if o == nil {
		return nil
	}
	return o.AccessGroups
}

func (o *EmailInviteCodes) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *EmailInviteCodes) GetEmail() *string {
	if o == nil {
		return nil
	}
	return o.Email
}

func (o *EmailInviteCodes) GetRole() *GetTeamMembersTeamsRole {
	if o == nil {
		return nil
	}
	return o.Role
}

func (o *EmailInviteCodes) GetIsDSyncUser() bool {
	if o == nil {
		return false
	}
	return o.IsDSyncUser
}

func (o *EmailInviteCodes) GetCreatedAt() *float64 {
	if o == nil {
		return nil
	}
	return o.CreatedAt
}

func (o *EmailInviteCodes) GetExpired() *bool {
	if o == nil {
		return nil
	}
	return o.Expired
}

func (o *EmailInviteCodes) GetProjects() map[string]GetTeamMembersTeamsProjects {
	if o == nil {
		return nil
	}
	return o.Projects
}

func (o *EmailInviteCodes) GetEntitlements() []string {
	if o == nil {
		return nil
	}
	return o.Entitlements
}

type GetTeamMembersPagination struct {
	HasNext bool `json:"hasNext"`
	// Amount of items in the current page.
	Count float64 `json:"count"`
	// Timestamp that must be used to request the next page.
	Next *float64 `json:"next"`
	// Timestamp that must be used to request the previous page.
	Prev *float64 `json:"prev"`
}

func (o *GetTeamMembersPagination) GetHasNext() bool {
	if o == nil {
		return false
	}
	return o.HasNext
}

func (o *GetTeamMembersPagination) GetCount() float64 {
	if o == nil {
		return 0.0
	}
	return o.Count
}

func (o *GetTeamMembersPagination) GetNext() *float64 {
	if o == nil {
		return nil
	}
	return o.Next
}

func (o *GetTeamMembersPagination) GetPrev() *float64 {
	if o == nil {
		return nil
	}
	return o.Prev
}

type GetTeamMembersResponseBody struct {
	Members          []GetTeamMembersMembers  `json:"members"`
	EmailInviteCodes []EmailInviteCodes       `json:"emailInviteCodes,omitempty"`
	Pagination       GetTeamMembersPagination `json:"pagination"`
}

func (o *GetTeamMembersResponseBody) GetMembers() []GetTeamMembersMembers {
	if o == nil {
		return []GetTeamMembersMembers{}
	}
	return o.Members
}

func (o *GetTeamMembersResponseBody) GetEmailInviteCodes() []EmailInviteCodes {
	if o == nil {
		return nil
	}
	return o.EmailInviteCodes
}

func (o *GetTeamMembersResponseBody) GetPagination() GetTeamMembersPagination {
	if o == nil {
		return GetTeamMembersPagination{}
	}
	return o.Pagination
}

type GetTeamMembersResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	Object   *GetTeamMembersResponseBody
}

func (o *GetTeamMembersResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *GetTeamMembersResponse) GetObject() *GetTeamMembersResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}
