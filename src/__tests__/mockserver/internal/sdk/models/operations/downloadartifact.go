// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"io"
	"mockserver/internal/sdk/models/components"
)

type DownloadArtifactRequest struct {
	// The continuous integration or delivery environment where this artifact is downloaded.
	XArtifactClientCi *string `header:"style=simple,explode=false,name=x-artifact-client-ci"`
	// 1 if the client is an interactive shell. Otherwise 0
	XArtifactClientInteractive *int64 `header:"style=simple,explode=false,name=x-artifact-client-interactive"`
	// The artifact hash
	Hash string `pathParam:"style=simple,explode=false,name=hash"`
	// The Team identifier to perform the request on behalf of.
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
	// The Team slug to perform the request on behalf of.
	Slug *string `queryParam:"style=form,explode=true,name=slug"`
}

func (o *DownloadArtifactRequest) GetXArtifactClientCi() *string {
	if o == nil {
		return nil
	}
	return o.XArtifactClientCi
}

func (o *DownloadArtifactRequest) GetXArtifactClientInteractive() *int64 {
	if o == nil {
		return nil
	}
	return o.XArtifactClientInteractive
}

func (o *DownloadArtifactRequest) GetHash() string {
	if o == nil {
		return ""
	}
	return o.Hash
}

func (o *DownloadArtifactRequest) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *DownloadArtifactRequest) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

type DownloadArtifactResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// The artifact was found and is downloaded as a stream. Content-Length should be verified.
	// The Close method must be called on this field, even if it is not used, to prevent resource leaks.
	ResponseStream io.ReadCloser
}

func (o *DownloadArtifactResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *DownloadArtifactResponse) GetResponseStream() io.ReadCloser {
	if o == nil {
		return nil
	}
	return o.ResponseStream
}
