// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type VerifyProjectDomainRequest struct {
	// The unique project identifier or the project name
	IDOrName string `pathParam:"style=simple,explode=false,name=idOrName"`
	// The domain name you want to verify
	Domain string `pathParam:"style=simple,explode=false,name=domain"`
	// The Team identifier to perform the request on behalf of.
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
	// The Team slug to perform the request on behalf of.
	Slug *string `queryParam:"style=form,explode=true,name=slug"`
}

func (o *VerifyProjectDomainRequest) GetIDOrName() string {
	if o == nil {
		return ""
	}
	return o.IDOrName
}

func (o *VerifyProjectDomainRequest) GetDomain() string {
	if o == nil {
		return ""
	}
	return o.Domain
}

func (o *VerifyProjectDomainRequest) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *VerifyProjectDomainRequest) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

// VerifyProjectDomainResponseBody - The project domain was verified successfully
// Domain is already verified
type VerifyProjectDomainResponseBody struct {
	Name                string   `json:"name"`
	ApexName            string   `json:"apexName"`
	ProjectID           string   `json:"projectId"`
	Redirect            *string  `json:"redirect,omitempty"`
	RedirectStatusCode  *float64 `json:"redirectStatusCode,omitempty"`
	GitBranch           *string  `json:"gitBranch,omitempty"`
	CustomEnvironmentID *string  `json:"customEnvironmentId,omitempty"`
	UpdatedAt           *float64 `json:"updatedAt,omitempty"`
	CreatedAt           *float64 `json:"createdAt,omitempty"`
	// `true` if the domain is verified for use with the project. If `false` it will not be used as an alias on this project until the challenge in `verification` is completed.
	Verified bool `json:"verified"`
}

func (o *VerifyProjectDomainResponseBody) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

func (o *VerifyProjectDomainResponseBody) GetApexName() string {
	if o == nil {
		return ""
	}
	return o.ApexName
}

func (o *VerifyProjectDomainResponseBody) GetProjectID() string {
	if o == nil {
		return ""
	}
	return o.ProjectID
}

func (o *VerifyProjectDomainResponseBody) GetRedirect() *string {
	if o == nil {
		return nil
	}
	return o.Redirect
}

func (o *VerifyProjectDomainResponseBody) GetRedirectStatusCode() *float64 {
	if o == nil {
		return nil
	}
	return o.RedirectStatusCode
}

func (o *VerifyProjectDomainResponseBody) GetGitBranch() *string {
	if o == nil {
		return nil
	}
	return o.GitBranch
}

func (o *VerifyProjectDomainResponseBody) GetCustomEnvironmentID() *string {
	if o == nil {
		return nil
	}
	return o.CustomEnvironmentID
}

func (o *VerifyProjectDomainResponseBody) GetUpdatedAt() *float64 {
	if o == nil {
		return nil
	}
	return o.UpdatedAt
}

func (o *VerifyProjectDomainResponseBody) GetCreatedAt() *float64 {
	if o == nil {
		return nil
	}
	return o.CreatedAt
}

func (o *VerifyProjectDomainResponseBody) GetVerified() bool {
	if o == nil {
		return false
	}
	return o.Verified
}

type VerifyProjectDomainResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// The project domain was verified successfully
	// Domain is already verified
	Object *VerifyProjectDomainResponseBody
}

func (o *VerifyProjectDomainResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *VerifyProjectDomainResponse) GetObject() *VerifyProjectDomainResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}
