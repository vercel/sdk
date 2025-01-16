// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type ListDeploymentFilesRequest struct {
	// The unique deployment identifier
	ID string `pathParam:"style=simple,explode=false,name=id"`
	// The Team identifier to perform the request on behalf of.
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
	// The Team slug to perform the request on behalf of.
	Slug *string `queryParam:"style=form,explode=true,name=slug"`
}

func (o *ListDeploymentFilesRequest) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *ListDeploymentFilesRequest) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *ListDeploymentFilesRequest) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

type ListDeploymentFilesResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Retrieved the file tree successfully
	FileTrees []components.FileTree
}

func (o *ListDeploymentFilesResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *ListDeploymentFilesResponse) GetFileTrees() []components.FileTree {
	if o == nil {
		return nil
	}
	return o.FileTrees
}
