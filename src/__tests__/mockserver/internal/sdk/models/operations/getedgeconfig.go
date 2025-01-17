// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"mockserver/internal/sdk/models/components"
)

type GetEdgeConfigRequest struct {
	EdgeConfigID string `pathParam:"style=simple,explode=false,name=edgeConfigId"`
	// The Team identifier to perform the request on behalf of.
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
	// The Team slug to perform the request on behalf of.
	Slug *string `queryParam:"style=form,explode=true,name=slug"`
}

func (o *GetEdgeConfigRequest) GetEdgeConfigID() string {
	if o == nil {
		return ""
	}
	return o.EdgeConfigID
}

func (o *GetEdgeConfigRequest) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *GetEdgeConfigRequest) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

// GetEdgeConfigTransfer - Keeps track of the current state of the Edge Config while it gets transferred.
type GetEdgeConfigTransfer struct {
	FromAccountID string   `json:"fromAccountId"`
	StartedAt     float64  `json:"startedAt"`
	DoneAt        *float64 `json:"doneAt"`
}

func (o *GetEdgeConfigTransfer) GetFromAccountID() string {
	if o == nil {
		return ""
	}
	return o.FromAccountID
}

func (o *GetEdgeConfigTransfer) GetStartedAt() float64 {
	if o == nil {
		return 0.0
	}
	return o.StartedAt
}

func (o *GetEdgeConfigTransfer) GetDoneAt() *float64 {
	if o == nil {
		return nil
	}
	return o.DoneAt
}

type GetEdgeConfigSchema struct {
}

type GetEdgeConfigType string

const (
	GetEdgeConfigTypeFlags GetEdgeConfigType = "flags"
)

func (e GetEdgeConfigType) ToPointer() *GetEdgeConfigType {
	return &e
}
func (e *GetEdgeConfigType) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "flags":
		*e = GetEdgeConfigType(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetEdgeConfigType: %v", v)
	}
}

type GetEdgeConfigPurpose struct {
	Type      GetEdgeConfigType `json:"type"`
	ProjectID string            `json:"projectId"`
}

func (o *GetEdgeConfigPurpose) GetType() GetEdgeConfigType {
	if o == nil {
		return GetEdgeConfigType("")
	}
	return o.Type
}

func (o *GetEdgeConfigPurpose) GetProjectID() string {
	if o == nil {
		return ""
	}
	return o.ProjectID
}

// GetEdgeConfigResponseBody - The EdgeConfig.
type GetEdgeConfigResponseBody struct {
	CreatedAt *float64 `json:"createdAt,omitempty"`
	UpdatedAt *float64 `json:"updatedAt,omitempty"`
	ID        *string  `json:"id,omitempty"`
	// Name for the Edge Config Names are not unique. Must start with an alphabetic character and can contain only alphanumeric characters and underscores).
	Slug    *string `json:"slug,omitempty"`
	OwnerID *string `json:"ownerId,omitempty"`
	Digest  *string `json:"digest,omitempty"`
	// Keeps track of the current state of the Edge Config while it gets transferred.
	Transfer    *GetEdgeConfigTransfer `json:"transfer,omitempty"`
	Schema      *GetEdgeConfigSchema   `json:"schema,omitempty"`
	Purpose     *GetEdgeConfigPurpose  `json:"purpose,omitempty"`
	SizeInBytes float64                `json:"sizeInBytes"`
	ItemCount   float64                `json:"itemCount"`
}

func (o *GetEdgeConfigResponseBody) GetCreatedAt() *float64 {
	if o == nil {
		return nil
	}
	return o.CreatedAt
}

func (o *GetEdgeConfigResponseBody) GetUpdatedAt() *float64 {
	if o == nil {
		return nil
	}
	return o.UpdatedAt
}

func (o *GetEdgeConfigResponseBody) GetID() *string {
	if o == nil {
		return nil
	}
	return o.ID
}

func (o *GetEdgeConfigResponseBody) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

func (o *GetEdgeConfigResponseBody) GetOwnerID() *string {
	if o == nil {
		return nil
	}
	return o.OwnerID
}

func (o *GetEdgeConfigResponseBody) GetDigest() *string {
	if o == nil {
		return nil
	}
	return o.Digest
}

func (o *GetEdgeConfigResponseBody) GetTransfer() *GetEdgeConfigTransfer {
	if o == nil {
		return nil
	}
	return o.Transfer
}

func (o *GetEdgeConfigResponseBody) GetSchema() *GetEdgeConfigSchema {
	if o == nil {
		return nil
	}
	return o.Schema
}

func (o *GetEdgeConfigResponseBody) GetPurpose() *GetEdgeConfigPurpose {
	if o == nil {
		return nil
	}
	return o.Purpose
}

func (o *GetEdgeConfigResponseBody) GetSizeInBytes() float64 {
	if o == nil {
		return 0.0
	}
	return o.SizeInBytes
}

func (o *GetEdgeConfigResponseBody) GetItemCount() float64 {
	if o == nil {
		return 0.0
	}
	return o.ItemCount
}

type GetEdgeConfigResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// The EdgeConfig.
	Object *GetEdgeConfigResponseBody
}

func (o *GetEdgeConfigResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *GetEdgeConfigResponse) GetObject() *GetEdgeConfigResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}
