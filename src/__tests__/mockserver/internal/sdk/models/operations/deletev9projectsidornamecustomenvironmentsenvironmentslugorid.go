// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type DeleteV9ProjectsIDOrNameCustomEnvironmentsEnvironmentSlugOrIDRequestBody struct {
	// Delete Environment Variables that are not assigned to any environments.
	DeleteUnassignedEnvironmentVariables *bool `json:"deleteUnassignedEnvironmentVariables,omitempty"`
}

func (o *DeleteV9ProjectsIDOrNameCustomEnvironmentsEnvironmentSlugOrIDRequestBody) GetDeleteUnassignedEnvironmentVariables() *bool {
	if o == nil {
		return nil
	}
	return o.DeleteUnassignedEnvironmentVariables
}

type DeleteV9ProjectsIDOrNameCustomEnvironmentsEnvironmentSlugOrIDRequest struct {
	// The unique project identifier or the project name
	IDOrName string `pathParam:"style=simple,explode=false,name=idOrName"`
	// The unique custom environment identifier within the project
	EnvironmentSlugOrID string `pathParam:"style=simple,explode=false,name=environmentSlugOrId"`
	// The Team identifier to perform the request on behalf of.
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
	// The Team slug to perform the request on behalf of.
	Slug        *string                                                                   `queryParam:"style=form,explode=true,name=slug"`
	RequestBody *DeleteV9ProjectsIDOrNameCustomEnvironmentsEnvironmentSlugOrIDRequestBody `request:"mediaType=application/json"`
}

func (o *DeleteV9ProjectsIDOrNameCustomEnvironmentsEnvironmentSlugOrIDRequest) GetIDOrName() string {
	if o == nil {
		return ""
	}
	return o.IDOrName
}

func (o *DeleteV9ProjectsIDOrNameCustomEnvironmentsEnvironmentSlugOrIDRequest) GetEnvironmentSlugOrID() string {
	if o == nil {
		return ""
	}
	return o.EnvironmentSlugOrID
}

func (o *DeleteV9ProjectsIDOrNameCustomEnvironmentsEnvironmentSlugOrIDRequest) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *DeleteV9ProjectsIDOrNameCustomEnvironmentsEnvironmentSlugOrIDRequest) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

func (o *DeleteV9ProjectsIDOrNameCustomEnvironmentsEnvironmentSlugOrIDRequest) GetRequestBody() *DeleteV9ProjectsIDOrNameCustomEnvironmentsEnvironmentSlugOrIDRequestBody {
	if o == nil {
		return nil
	}
	return o.RequestBody
}

type DeleteV9ProjectsIDOrNameCustomEnvironmentsEnvironmentSlugOrIDResponseBody struct {
}

type DeleteV9ProjectsIDOrNameCustomEnvironmentsEnvironmentSlugOrIDResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	Object   *DeleteV9ProjectsIDOrNameCustomEnvironmentsEnvironmentSlugOrIDResponseBody
}

func (o *DeleteV9ProjectsIDOrNameCustomEnvironmentsEnvironmentSlugOrIDResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *DeleteV9ProjectsIDOrNameCustomEnvironmentsEnvironmentSlugOrIDResponse) GetObject() *DeleteV9ProjectsIDOrNameCustomEnvironmentsEnvironmentSlugOrIDResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}
