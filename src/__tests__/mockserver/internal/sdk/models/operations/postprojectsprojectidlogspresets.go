// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"mockserver/internal/sdk/models/components"
)

type Group string

const (
	GroupPersonal Group = "personal"
	GroupTeam     Group = "team"
)

func (e Group) ToPointer() *Group {
	return &e
}
func (e *Group) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "personal":
		fallthrough
	case "team":
		*e = Group(v)
		return nil
	default:
		return fmt.Errorf("invalid value for Group: %v", v)
	}
}

type PostProjectsProjectIDLogsPresetsRequestBody struct {
	// query parameter for saved filter preset
	Query string `json:"query"`
	// The title of the preset
	Title string `json:"title"`
	Group Group  `json:"group"`
}

func (o *PostProjectsProjectIDLogsPresetsRequestBody) GetQuery() string {
	if o == nil {
		return ""
	}
	return o.Query
}

func (o *PostProjectsProjectIDLogsPresetsRequestBody) GetTitle() string {
	if o == nil {
		return ""
	}
	return o.Title
}

func (o *PostProjectsProjectIDLogsPresetsRequestBody) GetGroup() Group {
	if o == nil {
		return Group("")
	}
	return o.Group
}

type PostProjectsProjectIDLogsPresetsRequest struct {
	// projectId of the preset
	ProjectID   string                                       `pathParam:"style=simple,explode=false,name=projectId"`
	RequestBody *PostProjectsProjectIDLogsPresetsRequestBody `request:"mediaType=application/json"`
}

func (o *PostProjectsProjectIDLogsPresetsRequest) GetProjectID() string {
	if o == nil {
		return ""
	}
	return o.ProjectID
}

func (o *PostProjectsProjectIDLogsPresetsRequest) GetRequestBody() *PostProjectsProjectIDLogsPresetsRequestBody {
	if o == nil {
		return nil
	}
	return o.RequestBody
}

type PostProjectsProjectIDLogsPresetsResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	Team     *components.Team
}

func (o *PostProjectsProjectIDLogsPresetsResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *PostProjectsProjectIDLogsPresetsResponse) GetTeam() *components.Team {
	if o == nil {
		return nil
	}
	return o.Team
}
