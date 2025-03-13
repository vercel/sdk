// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"errors"
	"fmt"
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
)

type GetDeploymentsRequest struct {
	// Name of the deployment.
	App *string `queryParam:"style=form,explode=true,name=app"`
	// Gets the deployment created after this Date timestamp. (default: current time)
	From *float64 `queryParam:"style=form,explode=true,name=from"`
	// Maximum number of deployments to list from a request.
	Limit *float64 `queryParam:"style=form,explode=true,name=limit"`
	// Filter deployments from the given ID or name.
	ProjectID *string `queryParam:"style=form,explode=true,name=projectId"`
	// Filter deployments based on the environment.
	Target *string `queryParam:"style=form,explode=true,name=target"`
	// Gets the deployment created before this Date timestamp. (default: current time)
	To *float64 `queryParam:"style=form,explode=true,name=to"`
	// Filter out deployments based on users who have created the deployment.
	Users *string `queryParam:"style=form,explode=true,name=users"`
	// Get Deployments created after this JavaScript timestamp.
	Since *float64 `queryParam:"style=form,explode=true,name=since"`
	// Get Deployments created before this JavaScript timestamp.
	Until *float64 `queryParam:"style=form,explode=true,name=until"`
	// Filter deployments based on their state (`BUILDING`, `ERROR`, `INITIALIZING`, `QUEUED`, `READY`, `CANCELED`)
	State *string `queryParam:"style=form,explode=true,name=state"`
	// Filter deployments based on their rollback candidacy
	RollbackCandidate *bool `queryParam:"style=form,explode=true,name=rollbackCandidate"`
	// The Team identifier to perform the request on behalf of.
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
	// The Team slug to perform the request on behalf of.
	Slug *string `queryParam:"style=form,explode=true,name=slug"`
}

func (o *GetDeploymentsRequest) GetApp() *string {
	if o == nil {
		return nil
	}
	return o.App
}

func (o *GetDeploymentsRequest) GetFrom() *float64 {
	if o == nil {
		return nil
	}
	return o.From
}

func (o *GetDeploymentsRequest) GetLimit() *float64 {
	if o == nil {
		return nil
	}
	return o.Limit
}

func (o *GetDeploymentsRequest) GetProjectID() *string {
	if o == nil {
		return nil
	}
	return o.ProjectID
}

func (o *GetDeploymentsRequest) GetTarget() *string {
	if o == nil {
		return nil
	}
	return o.Target
}

func (o *GetDeploymentsRequest) GetTo() *float64 {
	if o == nil {
		return nil
	}
	return o.To
}

func (o *GetDeploymentsRequest) GetUsers() *string {
	if o == nil {
		return nil
	}
	return o.Users
}

func (o *GetDeploymentsRequest) GetSince() *float64 {
	if o == nil {
		return nil
	}
	return o.Since
}

func (o *GetDeploymentsRequest) GetUntil() *float64 {
	if o == nil {
		return nil
	}
	return o.Until
}

func (o *GetDeploymentsRequest) GetState() *string {
	if o == nil {
		return nil
	}
	return o.State
}

func (o *GetDeploymentsRequest) GetRollbackCandidate() *bool {
	if o == nil {
		return nil
	}
	return o.RollbackCandidate
}

func (o *GetDeploymentsRequest) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *GetDeploymentsRequest) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

// GetDeploymentsSource - The source of the deployment.
type GetDeploymentsSource string

const (
	GetDeploymentsSourceAPITriggerGitDeploy GetDeploymentsSource = "api-trigger-git-deploy"
	GetDeploymentsSourceCli                 GetDeploymentsSource = "cli"
	GetDeploymentsSourceCloneRepo           GetDeploymentsSource = "clone/repo"
	GetDeploymentsSourceGit                 GetDeploymentsSource = "git"
	GetDeploymentsSourceImport              GetDeploymentsSource = "import"
	GetDeploymentsSourceImportRepo          GetDeploymentsSource = "import/repo"
	GetDeploymentsSourceRedeploy            GetDeploymentsSource = "redeploy"
	GetDeploymentsSourceV0Web               GetDeploymentsSource = "v0-web"
)

func (e GetDeploymentsSource) ToPointer() *GetDeploymentsSource {
	return &e
}
func (e *GetDeploymentsSource) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "api-trigger-git-deploy":
		fallthrough
	case "cli":
		fallthrough
	case "clone/repo":
		fallthrough
	case "git":
		fallthrough
	case "import":
		fallthrough
	case "import/repo":
		fallthrough
	case "redeploy":
		fallthrough
	case "v0-web":
		*e = GetDeploymentsSource(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetDeploymentsSource: %v", v)
	}
}

// GetDeploymentsState - In which state is the deployment.
type GetDeploymentsState string

const (
	GetDeploymentsStateBuilding     GetDeploymentsState = "BUILDING"
	GetDeploymentsStateError        GetDeploymentsState = "ERROR"
	GetDeploymentsStateInitializing GetDeploymentsState = "INITIALIZING"
	GetDeploymentsStateQueued       GetDeploymentsState = "QUEUED"
	GetDeploymentsStateReady        GetDeploymentsState = "READY"
	GetDeploymentsStateCanceled     GetDeploymentsState = "CANCELED"
	GetDeploymentsStateDeleted      GetDeploymentsState = "DELETED"
)

func (e GetDeploymentsState) ToPointer() *GetDeploymentsState {
	return &e
}
func (e *GetDeploymentsState) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "BUILDING":
		fallthrough
	case "ERROR":
		fallthrough
	case "INITIALIZING":
		fallthrough
	case "QUEUED":
		fallthrough
	case "READY":
		fallthrough
	case "CANCELED":
		fallthrough
	case "DELETED":
		*e = GetDeploymentsState(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetDeploymentsState: %v", v)
	}
}

// GetDeploymentsReadyState - In which state is the deployment.
type GetDeploymentsReadyState string

const (
	GetDeploymentsReadyStateBuilding     GetDeploymentsReadyState = "BUILDING"
	GetDeploymentsReadyStateError        GetDeploymentsReadyState = "ERROR"
	GetDeploymentsReadyStateInitializing GetDeploymentsReadyState = "INITIALIZING"
	GetDeploymentsReadyStateQueued       GetDeploymentsReadyState = "QUEUED"
	GetDeploymentsReadyStateReady        GetDeploymentsReadyState = "READY"
	GetDeploymentsReadyStateCanceled     GetDeploymentsReadyState = "CANCELED"
	GetDeploymentsReadyStateDeleted      GetDeploymentsReadyState = "DELETED"
)

func (e GetDeploymentsReadyState) ToPointer() *GetDeploymentsReadyState {
	return &e
}
func (e *GetDeploymentsReadyState) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "BUILDING":
		fallthrough
	case "ERROR":
		fallthrough
	case "INITIALIZING":
		fallthrough
	case "QUEUED":
		fallthrough
	case "READY":
		fallthrough
	case "CANCELED":
		fallthrough
	case "DELETED":
		*e = GetDeploymentsReadyState(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetDeploymentsReadyState: %v", v)
	}
}

// GetDeploymentsType - The type of the deployment.
type GetDeploymentsType string

const (
	GetDeploymentsTypeLambdas GetDeploymentsType = "LAMBDAS"
)

func (e GetDeploymentsType) ToPointer() *GetDeploymentsType {
	return &e
}
func (e *GetDeploymentsType) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "LAMBDAS":
		*e = GetDeploymentsType(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetDeploymentsType: %v", v)
	}
}

// GetDeploymentsCreator - Metadata information of the user who created the deployment.
type GetDeploymentsCreator struct {
	// The unique identifier of the user.
	UID string `json:"uid"`
	// The email address of the user.
	Email *string `json:"email,omitempty"`
	// The username of the user.
	Username *string `json:"username,omitempty"`
	// The GitHub login of the user.
	GithubLogin *string `json:"githubLogin,omitempty"`
	// The GitLab login of the user.
	GitlabLogin *string `json:"gitlabLogin,omitempty"`
}

func (o *GetDeploymentsCreator) GetUID() string {
	if o == nil {
		return ""
	}
	return o.UID
}

func (o *GetDeploymentsCreator) GetEmail() *string {
	if o == nil {
		return nil
	}
	return o.Email
}

func (o *GetDeploymentsCreator) GetUsername() *string {
	if o == nil {
		return nil
	}
	return o.Username
}

func (o *GetDeploymentsCreator) GetGithubLogin() *string {
	if o == nil {
		return nil
	}
	return o.GithubLogin
}

func (o *GetDeploymentsCreator) GetGitlabLogin() *string {
	if o == nil {
		return nil
	}
	return o.GitlabLogin
}

// GetDeploymentsTarget - On which environment has the deployment been deployed to.
type GetDeploymentsTarget string

const (
	GetDeploymentsTargetProduction GetDeploymentsTarget = "production"
	GetDeploymentsTargetStaging    GetDeploymentsTarget = "staging"
)

func (e GetDeploymentsTarget) ToPointer() *GetDeploymentsTarget {
	return &e
}
func (e *GetDeploymentsTarget) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "production":
		fallthrough
	case "staging":
		*e = GetDeploymentsTarget(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetDeploymentsTarget: %v", v)
	}
}

// GetDeploymentsAliasError - An error object in case aliasing of the deployment failed.
type GetDeploymentsAliasError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

func (o *GetDeploymentsAliasError) GetCode() string {
	if o == nil {
		return ""
	}
	return o.Code
}

func (o *GetDeploymentsAliasError) GetMessage() string {
	if o == nil {
		return ""
	}
	return o.Message
}

type GetDeploymentsAliasAssignedType string

const (
	GetDeploymentsAliasAssignedTypeNumber  GetDeploymentsAliasAssignedType = "number"
	GetDeploymentsAliasAssignedTypeBoolean GetDeploymentsAliasAssignedType = "boolean"
)

type GetDeploymentsAliasAssigned struct {
	Number  *float64
	Boolean *bool

	Type GetDeploymentsAliasAssignedType
}

func CreateGetDeploymentsAliasAssignedNumber(number float64) GetDeploymentsAliasAssigned {
	typ := GetDeploymentsAliasAssignedTypeNumber

	return GetDeploymentsAliasAssigned{
		Number: &number,
		Type:   typ,
	}
}

func CreateGetDeploymentsAliasAssignedBoolean(boolean bool) GetDeploymentsAliasAssigned {
	typ := GetDeploymentsAliasAssignedTypeBoolean

	return GetDeploymentsAliasAssigned{
		Boolean: &boolean,
		Type:    typ,
	}
}

func (u *GetDeploymentsAliasAssigned) UnmarshalJSON(data []byte) error {

	var number float64 = float64(0)
	if err := utils.UnmarshalJSON(data, &number, "", true, true); err == nil {
		u.Number = &number
		u.Type = GetDeploymentsAliasAssignedTypeNumber
		return nil
	}

	var boolean bool = false
	if err := utils.UnmarshalJSON(data, &boolean, "", true, true); err == nil {
		u.Boolean = &boolean
		u.Type = GetDeploymentsAliasAssignedTypeBoolean
		return nil
	}

	return fmt.Errorf("could not unmarshal `%s` into any supported union types for GetDeploymentsAliasAssigned", string(data))
}

func (u GetDeploymentsAliasAssigned) MarshalJSON() ([]byte, error) {
	if u.Number != nil {
		return utils.MarshalJSON(u.Number, "", true)
	}

	if u.Boolean != nil {
		return utils.MarshalJSON(u.Boolean, "", true)
	}

	return nil, errors.New("could not marshal union type GetDeploymentsAliasAssigned: all fields are null")
}

// GetDeploymentsReadySubstate - Since June 2023 Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - PROMOTED: has seen production traffic
type GetDeploymentsReadySubstate string

const (
	GetDeploymentsReadySubstateStaged   GetDeploymentsReadySubstate = "STAGED"
	GetDeploymentsReadySubstatePromoted GetDeploymentsReadySubstate = "PROMOTED"
)

func (e GetDeploymentsReadySubstate) ToPointer() *GetDeploymentsReadySubstate {
	return &e
}
func (e *GetDeploymentsReadySubstate) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "STAGED":
		fallthrough
	case "PROMOTED":
		*e = GetDeploymentsReadySubstate(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetDeploymentsReadySubstate: %v", v)
	}
}

// GetDeploymentsChecksState - State of all registered checks
type GetDeploymentsChecksState string

const (
	GetDeploymentsChecksStateRegistered GetDeploymentsChecksState = "registered"
	GetDeploymentsChecksStateRunning    GetDeploymentsChecksState = "running"
	GetDeploymentsChecksStateCompleted  GetDeploymentsChecksState = "completed"
)

func (e GetDeploymentsChecksState) ToPointer() *GetDeploymentsChecksState {
	return &e
}
func (e *GetDeploymentsChecksState) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "registered":
		fallthrough
	case "running":
		fallthrough
	case "completed":
		*e = GetDeploymentsChecksState(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetDeploymentsChecksState: %v", v)
	}
}

// GetDeploymentsChecksConclusion - Conclusion for checks
type GetDeploymentsChecksConclusion string

const (
	GetDeploymentsChecksConclusionSucceeded GetDeploymentsChecksConclusion = "succeeded"
	GetDeploymentsChecksConclusionFailed    GetDeploymentsChecksConclusion = "failed"
	GetDeploymentsChecksConclusionSkipped   GetDeploymentsChecksConclusion = "skipped"
	GetDeploymentsChecksConclusionCanceled  GetDeploymentsChecksConclusion = "canceled"
)

func (e GetDeploymentsChecksConclusion) ToPointer() *GetDeploymentsChecksConclusion {
	return &e
}
func (e *GetDeploymentsChecksConclusion) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "succeeded":
		fallthrough
	case "failed":
		fallthrough
	case "skipped":
		fallthrough
	case "canceled":
		*e = GetDeploymentsChecksConclusion(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetDeploymentsChecksConclusion: %v", v)
	}
}

type GetDeploymentsFramework string

const (
	GetDeploymentsFrameworkBlitzjs        GetDeploymentsFramework = "blitzjs"
	GetDeploymentsFrameworkNextjs         GetDeploymentsFramework = "nextjs"
	GetDeploymentsFrameworkGatsby         GetDeploymentsFramework = "gatsby"
	GetDeploymentsFrameworkRemix          GetDeploymentsFramework = "remix"
	GetDeploymentsFrameworkReactRouter    GetDeploymentsFramework = "react-router"
	GetDeploymentsFrameworkAstro          GetDeploymentsFramework = "astro"
	GetDeploymentsFrameworkHexo           GetDeploymentsFramework = "hexo"
	GetDeploymentsFrameworkEleventy       GetDeploymentsFramework = "eleventy"
	GetDeploymentsFrameworkDocusaurus2    GetDeploymentsFramework = "docusaurus-2"
	GetDeploymentsFrameworkDocusaurus     GetDeploymentsFramework = "docusaurus"
	GetDeploymentsFrameworkPreact         GetDeploymentsFramework = "preact"
	GetDeploymentsFrameworkSolidstart1    GetDeploymentsFramework = "solidstart-1"
	GetDeploymentsFrameworkSolidstart     GetDeploymentsFramework = "solidstart"
	GetDeploymentsFrameworkDojo           GetDeploymentsFramework = "dojo"
	GetDeploymentsFrameworkEmber          GetDeploymentsFramework = "ember"
	GetDeploymentsFrameworkVue            GetDeploymentsFramework = "vue"
	GetDeploymentsFrameworkScully         GetDeploymentsFramework = "scully"
	GetDeploymentsFrameworkIonicAngular   GetDeploymentsFramework = "ionic-angular"
	GetDeploymentsFrameworkAngular        GetDeploymentsFramework = "angular"
	GetDeploymentsFrameworkPolymer        GetDeploymentsFramework = "polymer"
	GetDeploymentsFrameworkSvelte         GetDeploymentsFramework = "svelte"
	GetDeploymentsFrameworkSveltekit      GetDeploymentsFramework = "sveltekit"
	GetDeploymentsFrameworkSveltekit1     GetDeploymentsFramework = "sveltekit-1"
	GetDeploymentsFrameworkIonicReact     GetDeploymentsFramework = "ionic-react"
	GetDeploymentsFrameworkCreateReactApp GetDeploymentsFramework = "create-react-app"
	GetDeploymentsFrameworkGridsome       GetDeploymentsFramework = "gridsome"
	GetDeploymentsFrameworkUmijs          GetDeploymentsFramework = "umijs"
	GetDeploymentsFrameworkSapper         GetDeploymentsFramework = "sapper"
	GetDeploymentsFrameworkSaber          GetDeploymentsFramework = "saber"
	GetDeploymentsFrameworkStencil        GetDeploymentsFramework = "stencil"
	GetDeploymentsFrameworkNuxtjs         GetDeploymentsFramework = "nuxtjs"
	GetDeploymentsFrameworkRedwoodjs      GetDeploymentsFramework = "redwoodjs"
	GetDeploymentsFrameworkHugo           GetDeploymentsFramework = "hugo"
	GetDeploymentsFrameworkJekyll         GetDeploymentsFramework = "jekyll"
	GetDeploymentsFrameworkBrunch         GetDeploymentsFramework = "brunch"
	GetDeploymentsFrameworkMiddleman      GetDeploymentsFramework = "middleman"
	GetDeploymentsFrameworkZola           GetDeploymentsFramework = "zola"
	GetDeploymentsFrameworkHydrogen       GetDeploymentsFramework = "hydrogen"
	GetDeploymentsFrameworkVite           GetDeploymentsFramework = "vite"
	GetDeploymentsFrameworkVitepress      GetDeploymentsFramework = "vitepress"
	GetDeploymentsFrameworkVuepress       GetDeploymentsFramework = "vuepress"
	GetDeploymentsFrameworkParcel         GetDeploymentsFramework = "parcel"
	GetDeploymentsFrameworkFasthtml       GetDeploymentsFramework = "fasthtml"
	GetDeploymentsFrameworkSanityV3       GetDeploymentsFramework = "sanity-v3"
	GetDeploymentsFrameworkSanity         GetDeploymentsFramework = "sanity"
	GetDeploymentsFrameworkStorybook      GetDeploymentsFramework = "storybook"
)

func (e GetDeploymentsFramework) ToPointer() *GetDeploymentsFramework {
	return &e
}
func (e *GetDeploymentsFramework) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "blitzjs":
		fallthrough
	case "nextjs":
		fallthrough
	case "gatsby":
		fallthrough
	case "remix":
		fallthrough
	case "react-router":
		fallthrough
	case "astro":
		fallthrough
	case "hexo":
		fallthrough
	case "eleventy":
		fallthrough
	case "docusaurus-2":
		fallthrough
	case "docusaurus":
		fallthrough
	case "preact":
		fallthrough
	case "solidstart-1":
		fallthrough
	case "solidstart":
		fallthrough
	case "dojo":
		fallthrough
	case "ember":
		fallthrough
	case "vue":
		fallthrough
	case "scully":
		fallthrough
	case "ionic-angular":
		fallthrough
	case "angular":
		fallthrough
	case "polymer":
		fallthrough
	case "svelte":
		fallthrough
	case "sveltekit":
		fallthrough
	case "sveltekit-1":
		fallthrough
	case "ionic-react":
		fallthrough
	case "create-react-app":
		fallthrough
	case "gridsome":
		fallthrough
	case "umijs":
		fallthrough
	case "sapper":
		fallthrough
	case "saber":
		fallthrough
	case "stencil":
		fallthrough
	case "nuxtjs":
		fallthrough
	case "redwoodjs":
		fallthrough
	case "hugo":
		fallthrough
	case "jekyll":
		fallthrough
	case "brunch":
		fallthrough
	case "middleman":
		fallthrough
	case "zola":
		fallthrough
	case "hydrogen":
		fallthrough
	case "vite":
		fallthrough
	case "vitepress":
		fallthrough
	case "vuepress":
		fallthrough
	case "parcel":
		fallthrough
	case "fasthtml":
		fallthrough
	case "sanity-v3":
		fallthrough
	case "sanity":
		fallthrough
	case "storybook":
		*e = GetDeploymentsFramework(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetDeploymentsFramework: %v", v)
	}
}

type GetDeploymentsNodeVersion string

const (
	GetDeploymentsNodeVersionTwentyTwoDotX  GetDeploymentsNodeVersion = "22.x"
	GetDeploymentsNodeVersionTwentyDotX     GetDeploymentsNodeVersion = "20.x"
	GetDeploymentsNodeVersionEighteenDotX   GetDeploymentsNodeVersion = "18.x"
	GetDeploymentsNodeVersionSixteenDotX    GetDeploymentsNodeVersion = "16.x"
	GetDeploymentsNodeVersionFourteenDotX   GetDeploymentsNodeVersion = "14.x"
	GetDeploymentsNodeVersionTwelveDotX     GetDeploymentsNodeVersion = "12.x"
	GetDeploymentsNodeVersionTenDotX        GetDeploymentsNodeVersion = "10.x"
	GetDeploymentsNodeVersionEightDot10DotX GetDeploymentsNodeVersion = "8.10.x"
)

func (e GetDeploymentsNodeVersion) ToPointer() *GetDeploymentsNodeVersion {
	return &e
}
func (e *GetDeploymentsNodeVersion) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "22.x":
		fallthrough
	case "20.x":
		fallthrough
	case "18.x":
		fallthrough
	case "16.x":
		fallthrough
	case "14.x":
		fallthrough
	case "12.x":
		fallthrough
	case "10.x":
		fallthrough
	case "8.10.x":
		*e = GetDeploymentsNodeVersion(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetDeploymentsNodeVersion: %v", v)
	}
}

type GetDeploymentsSpeedInsights struct {
	ID         string   `json:"id"`
	EnabledAt  *float64 `json:"enabledAt,omitempty"`
	DisabledAt *float64 `json:"disabledAt,omitempty"`
	CanceledAt *float64 `json:"canceledAt,omitempty"`
	HasData    *bool    `json:"hasData,omitempty"`
	PaidAt     *float64 `json:"paidAt,omitempty"`
}

func (o *GetDeploymentsSpeedInsights) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *GetDeploymentsSpeedInsights) GetEnabledAt() *float64 {
	if o == nil {
		return nil
	}
	return o.EnabledAt
}

func (o *GetDeploymentsSpeedInsights) GetDisabledAt() *float64 {
	if o == nil {
		return nil
	}
	return o.DisabledAt
}

func (o *GetDeploymentsSpeedInsights) GetCanceledAt() *float64 {
	if o == nil {
		return nil
	}
	return o.CanceledAt
}

func (o *GetDeploymentsSpeedInsights) GetHasData() *bool {
	if o == nil {
		return nil
	}
	return o.HasData
}

func (o *GetDeploymentsSpeedInsights) GetPaidAt() *float64 {
	if o == nil {
		return nil
	}
	return o.PaidAt
}

type GetDeploymentsWebAnalytics struct {
	ID         string   `json:"id"`
	DisabledAt *float64 `json:"disabledAt,omitempty"`
	CanceledAt *float64 `json:"canceledAt,omitempty"`
	EnabledAt  *float64 `json:"enabledAt,omitempty"`
	HasData    *bool    `json:"hasData,omitempty"`
}

func (o *GetDeploymentsWebAnalytics) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *GetDeploymentsWebAnalytics) GetDisabledAt() *float64 {
	if o == nil {
		return nil
	}
	return o.DisabledAt
}

func (o *GetDeploymentsWebAnalytics) GetCanceledAt() *float64 {
	if o == nil {
		return nil
	}
	return o.CanceledAt
}

func (o *GetDeploymentsWebAnalytics) GetEnabledAt() *float64 {
	if o == nil {
		return nil
	}
	return o.EnabledAt
}

func (o *GetDeploymentsWebAnalytics) GetHasData() *bool {
	if o == nil {
		return nil
	}
	return o.HasData
}

// GetDeploymentsGitComments - Since June '23
type GetDeploymentsGitComments struct {
	// Whether the Vercel bot should comment on PRs
	OnPullRequest bool `json:"onPullRequest"`
	// Whether the Vercel bot should comment on commits
	OnCommit bool `json:"onCommit"`
}

func (o *GetDeploymentsGitComments) GetOnPullRequest() bool {
	if o == nil {
		return false
	}
	return o.OnPullRequest
}

func (o *GetDeploymentsGitComments) GetOnCommit() bool {
	if o == nil {
		return false
	}
	return o.OnCommit
}

// GetDeploymentsProjectSettings - The project settings which was used for this deployment
type GetDeploymentsProjectSettings struct {
	Framework                       *GetDeploymentsFramework     `json:"framework,omitempty"`
	GitForkProtection               *bool                        `json:"gitForkProtection,omitempty"`
	CustomerSupportCodeVisibility   *bool                        `json:"customerSupportCodeVisibility,omitempty"`
	GitLFS                          *bool                        `json:"gitLFS,omitempty"`
	DevCommand                      *string                      `json:"devCommand,omitempty"`
	InstallCommand                  *string                      `json:"installCommand,omitempty"`
	BuildCommand                    *string                      `json:"buildCommand,omitempty"`
	NodeVersion                     *GetDeploymentsNodeVersion   `json:"nodeVersion,omitempty"`
	OutputDirectory                 *string                      `json:"outputDirectory,omitempty"`
	PublicSource                    *bool                        `json:"publicSource,omitempty"`
	RootDirectory                   *string                      `json:"rootDirectory,omitempty"`
	ServerlessFunctionRegion        *string                      `json:"serverlessFunctionRegion,omitempty"`
	SourceFilesOutsideRootDirectory *bool                        `json:"sourceFilesOutsideRootDirectory,omitempty"`
	CommandForIgnoringBuildStep     *string                      `json:"commandForIgnoringBuildStep,omitempty"`
	CreatedAt                       *float64                     `json:"createdAt,omitempty"`
	SpeedInsights                   *GetDeploymentsSpeedInsights `json:"speedInsights,omitempty"`
	WebAnalytics                    *GetDeploymentsWebAnalytics  `json:"webAnalytics,omitempty"`
	SkipGitConnectDuringLink        *bool                        `json:"skipGitConnectDuringLink,omitempty"`
	// Since June '23
	GitComments *GetDeploymentsGitComments `json:"gitComments,omitempty"`
}

func (o *GetDeploymentsProjectSettings) GetFramework() *GetDeploymentsFramework {
	if o == nil {
		return nil
	}
	return o.Framework
}

func (o *GetDeploymentsProjectSettings) GetGitForkProtection() *bool {
	if o == nil {
		return nil
	}
	return o.GitForkProtection
}

func (o *GetDeploymentsProjectSettings) GetCustomerSupportCodeVisibility() *bool {
	if o == nil {
		return nil
	}
	return o.CustomerSupportCodeVisibility
}

func (o *GetDeploymentsProjectSettings) GetGitLFS() *bool {
	if o == nil {
		return nil
	}
	return o.GitLFS
}

func (o *GetDeploymentsProjectSettings) GetDevCommand() *string {
	if o == nil {
		return nil
	}
	return o.DevCommand
}

func (o *GetDeploymentsProjectSettings) GetInstallCommand() *string {
	if o == nil {
		return nil
	}
	return o.InstallCommand
}

func (o *GetDeploymentsProjectSettings) GetBuildCommand() *string {
	if o == nil {
		return nil
	}
	return o.BuildCommand
}

func (o *GetDeploymentsProjectSettings) GetNodeVersion() *GetDeploymentsNodeVersion {
	if o == nil {
		return nil
	}
	return o.NodeVersion
}

func (o *GetDeploymentsProjectSettings) GetOutputDirectory() *string {
	if o == nil {
		return nil
	}
	return o.OutputDirectory
}

func (o *GetDeploymentsProjectSettings) GetPublicSource() *bool {
	if o == nil {
		return nil
	}
	return o.PublicSource
}

func (o *GetDeploymentsProjectSettings) GetRootDirectory() *string {
	if o == nil {
		return nil
	}
	return o.RootDirectory
}

func (o *GetDeploymentsProjectSettings) GetServerlessFunctionRegion() *string {
	if o == nil {
		return nil
	}
	return o.ServerlessFunctionRegion
}

func (o *GetDeploymentsProjectSettings) GetSourceFilesOutsideRootDirectory() *bool {
	if o == nil {
		return nil
	}
	return o.SourceFilesOutsideRootDirectory
}

func (o *GetDeploymentsProjectSettings) GetCommandForIgnoringBuildStep() *string {
	if o == nil {
		return nil
	}
	return o.CommandForIgnoringBuildStep
}

func (o *GetDeploymentsProjectSettings) GetCreatedAt() *float64 {
	if o == nil {
		return nil
	}
	return o.CreatedAt
}

func (o *GetDeploymentsProjectSettings) GetSpeedInsights() *GetDeploymentsSpeedInsights {
	if o == nil {
		return nil
	}
	return o.SpeedInsights
}

func (o *GetDeploymentsProjectSettings) GetWebAnalytics() *GetDeploymentsWebAnalytics {
	if o == nil {
		return nil
	}
	return o.WebAnalytics
}

func (o *GetDeploymentsProjectSettings) GetSkipGitConnectDuringLink() *bool {
	if o == nil {
		return nil
	}
	return o.SkipGitConnectDuringLink
}

func (o *GetDeploymentsProjectSettings) GetGitComments() *GetDeploymentsGitComments {
	if o == nil {
		return nil
	}
	return o.GitComments
}

// GetDeploymentsCustomEnvironment - The custom environment used for this deployment, if any
type GetDeploymentsCustomEnvironment struct {
	ID   string  `json:"id"`
	Slug *string `json:"slug,omitempty"`
}

func (o *GetDeploymentsCustomEnvironment) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *GetDeploymentsCustomEnvironment) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

type Deployments struct {
	// The unique identifier of the deployment.
	UID string `json:"uid"`
	// The name of the deployment.
	Name string `json:"name"`
	// The URL of the deployment.
	URL string `json:"url"`
	// Timestamp of when the deployment got created.
	Created float64 `json:"created"`
	// The default route that should be used for screenshots and links if configured with microfrontends.
	DefaultRoute *string `json:"defaultRoute,omitempty"`
	// Timestamp of when the deployment got deleted.
	Deleted *float64 `json:"deleted,omitempty"`
	// Timestamp of when the deployment was undeleted.
	Undeleted *float64 `json:"undeleted,omitempty"`
	// Optional flag to indicate if the deployment was soft deleted by retention policy.
	SoftDeletedByRetention *bool `json:"softDeletedByRetention,omitempty"`
	// The source of the deployment.
	Source *GetDeploymentsSource `json:"source,omitempty"`
	// In which state is the deployment.
	State *GetDeploymentsState `json:"state,omitempty"`
	// In which state is the deployment.
	ReadyState *GetDeploymentsReadyState `json:"readyState,omitempty"`
	// The type of the deployment.
	Type GetDeploymentsType `json:"type"`
	// Metadata information of the user who created the deployment.
	Creator GetDeploymentsCreator `json:"creator"`
	// Metadata information from the Git provider.
	Meta map[string]string `json:"meta,omitempty"`
	// On which environment has the deployment been deployed to.
	Target *GetDeploymentsTarget `json:"target,omitempty"`
	// An error object in case aliasing of the deployment failed.
	AliasError    *GetDeploymentsAliasError    `json:"aliasError,omitempty"`
	AliasAssigned *GetDeploymentsAliasAssigned `json:"aliasAssigned,omitempty"`
	// Timestamp of when the deployment got created.
	CreatedAt *float64 `json:"createdAt,omitempty"`
	// Timestamp of when the deployment started building at.
	BuildingAt *float64 `json:"buildingAt,omitempty"`
	// Timestamp of when the deployment got ready.
	Ready *float64 `json:"ready,omitempty"`
	// Since June 2023 Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - PROMOTED: has seen production traffic
	ReadySubstate *GetDeploymentsReadySubstate `json:"readySubstate,omitempty"`
	// State of all registered checks
	ChecksState *GetDeploymentsChecksState `json:"checksState,omitempty"`
	// Conclusion for checks
	ChecksConclusion *GetDeploymentsChecksConclusion `json:"checksConclusion,omitempty"`
	// Vercel URL to inspect the deployment.
	InspectorURL *string `json:"inspectorUrl"`
	// Deployment can be used for instant rollback
	IsRollbackCandidate *bool `json:"isRollbackCandidate,omitempty"`
	// The project settings which was used for this deployment
	ProjectSettings *GetDeploymentsProjectSettings `json:"projectSettings,omitempty"`
	// The flag saying if Secure Compute network is used for builds
	ConnectBuildsEnabled *bool `json:"connectBuildsEnabled,omitempty"`
	// The ID of Secure Compute network used for this deployment
	ConnectConfigurationID *string `json:"connectConfigurationId,omitempty"`
	// The ID of Secure Compute network used for this deployment's passive functions
	PassiveConnectConfigurationID *string `json:"passiveConnectConfigurationId,omitempty"`
	// The expiration configured by the project retention policy
	Expiration *float64 `json:"expiration,omitempty"`
	// The expiration proposed to replace the existing expiration
	ProposedExpiration *float64 `json:"proposedExpiration,omitempty"`
	// The custom environment used for this deployment, if any
	CustomEnvironment *GetDeploymentsCustomEnvironment `json:"customEnvironment,omitempty"`
}

func (o *Deployments) GetUID() string {
	if o == nil {
		return ""
	}
	return o.UID
}

func (o *Deployments) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

func (o *Deployments) GetURL() string {
	if o == nil {
		return ""
	}
	return o.URL
}

func (o *Deployments) GetCreated() float64 {
	if o == nil {
		return 0.0
	}
	return o.Created
}

func (o *Deployments) GetDefaultRoute() *string {
	if o == nil {
		return nil
	}
	return o.DefaultRoute
}

func (o *Deployments) GetDeleted() *float64 {
	if o == nil {
		return nil
	}
	return o.Deleted
}

func (o *Deployments) GetUndeleted() *float64 {
	if o == nil {
		return nil
	}
	return o.Undeleted
}

func (o *Deployments) GetSoftDeletedByRetention() *bool {
	if o == nil {
		return nil
	}
	return o.SoftDeletedByRetention
}

func (o *Deployments) GetSource() *GetDeploymentsSource {
	if o == nil {
		return nil
	}
	return o.Source
}

func (o *Deployments) GetState() *GetDeploymentsState {
	if o == nil {
		return nil
	}
	return o.State
}

func (o *Deployments) GetReadyState() *GetDeploymentsReadyState {
	if o == nil {
		return nil
	}
	return o.ReadyState
}

func (o *Deployments) GetType() GetDeploymentsType {
	if o == nil {
		return GetDeploymentsType("")
	}
	return o.Type
}

func (o *Deployments) GetCreator() GetDeploymentsCreator {
	if o == nil {
		return GetDeploymentsCreator{}
	}
	return o.Creator
}

func (o *Deployments) GetMeta() map[string]string {
	if o == nil {
		return nil
	}
	return o.Meta
}

func (o *Deployments) GetTarget() *GetDeploymentsTarget {
	if o == nil {
		return nil
	}
	return o.Target
}

func (o *Deployments) GetAliasError() *GetDeploymentsAliasError {
	if o == nil {
		return nil
	}
	return o.AliasError
}

func (o *Deployments) GetAliasAssigned() *GetDeploymentsAliasAssigned {
	if o == nil {
		return nil
	}
	return o.AliasAssigned
}

func (o *Deployments) GetCreatedAt() *float64 {
	if o == nil {
		return nil
	}
	return o.CreatedAt
}

func (o *Deployments) GetBuildingAt() *float64 {
	if o == nil {
		return nil
	}
	return o.BuildingAt
}

func (o *Deployments) GetReady() *float64 {
	if o == nil {
		return nil
	}
	return o.Ready
}

func (o *Deployments) GetReadySubstate() *GetDeploymentsReadySubstate {
	if o == nil {
		return nil
	}
	return o.ReadySubstate
}

func (o *Deployments) GetChecksState() *GetDeploymentsChecksState {
	if o == nil {
		return nil
	}
	return o.ChecksState
}

func (o *Deployments) GetChecksConclusion() *GetDeploymentsChecksConclusion {
	if o == nil {
		return nil
	}
	return o.ChecksConclusion
}

func (o *Deployments) GetInspectorURL() *string {
	if o == nil {
		return nil
	}
	return o.InspectorURL
}

func (o *Deployments) GetIsRollbackCandidate() *bool {
	if o == nil {
		return nil
	}
	return o.IsRollbackCandidate
}

func (o *Deployments) GetProjectSettings() *GetDeploymentsProjectSettings {
	if o == nil {
		return nil
	}
	return o.ProjectSettings
}

func (o *Deployments) GetConnectBuildsEnabled() *bool {
	if o == nil {
		return nil
	}
	return o.ConnectBuildsEnabled
}

func (o *Deployments) GetConnectConfigurationID() *string {
	if o == nil {
		return nil
	}
	return o.ConnectConfigurationID
}

func (o *Deployments) GetPassiveConnectConfigurationID() *string {
	if o == nil {
		return nil
	}
	return o.PassiveConnectConfigurationID
}

func (o *Deployments) GetExpiration() *float64 {
	if o == nil {
		return nil
	}
	return o.Expiration
}

func (o *Deployments) GetProposedExpiration() *float64 {
	if o == nil {
		return nil
	}
	return o.ProposedExpiration
}

func (o *Deployments) GetCustomEnvironment() *GetDeploymentsCustomEnvironment {
	if o == nil {
		return nil
	}
	return o.CustomEnvironment
}

type GetDeploymentsResponseBody struct {
	// This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.
	Pagination  components.Pagination `json:"pagination"`
	Deployments []Deployments         `json:"deployments"`
}

func (o *GetDeploymentsResponseBody) GetPagination() components.Pagination {
	if o == nil {
		return components.Pagination{}
	}
	return o.Pagination
}

func (o *GetDeploymentsResponseBody) GetDeployments() []Deployments {
	if o == nil {
		return []Deployments{}
	}
	return o.Deployments
}

type GetDeploymentsResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	Object   *GetDeploymentsResponseBody
}

func (o *GetDeploymentsResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *GetDeploymentsResponse) GetObject() *GetDeploymentsResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}
