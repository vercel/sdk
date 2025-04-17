// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"mockserver/internal/sdk/models/components"
)

type GetIntegrationLogDrainsRequest struct {
	// The Team identifier to perform the request on behalf of.
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
	// The Team slug to perform the request on behalf of.
	Slug *string `queryParam:"style=form,explode=true,name=slug"`
}

func (o *GetIntegrationLogDrainsRequest) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *GetIntegrationLogDrainsRequest) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

// GetIntegrationLogDrainsDeliveryFormat - The delivery log format
type GetIntegrationLogDrainsDeliveryFormat string

const (
	GetIntegrationLogDrainsDeliveryFormatJSON     GetIntegrationLogDrainsDeliveryFormat = "json"
	GetIntegrationLogDrainsDeliveryFormatNdjson   GetIntegrationLogDrainsDeliveryFormat = "ndjson"
	GetIntegrationLogDrainsDeliveryFormatSyslog   GetIntegrationLogDrainsDeliveryFormat = "syslog"
	GetIntegrationLogDrainsDeliveryFormatProtobuf GetIntegrationLogDrainsDeliveryFormat = "protobuf"
)

func (e GetIntegrationLogDrainsDeliveryFormat) ToPointer() *GetIntegrationLogDrainsDeliveryFormat {
	return &e
}
func (e *GetIntegrationLogDrainsDeliveryFormat) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "json":
		fallthrough
	case "ndjson":
		fallthrough
	case "syslog":
		fallthrough
	case "protobuf":
		*e = GetIntegrationLogDrainsDeliveryFormat(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetIntegrationLogDrainsDeliveryFormat: %v", v)
	}
}

// GetIntegrationLogDrainsSources - The sources from which logs are currently being delivered to this log drain.
type GetIntegrationLogDrainsSources string

const (
	GetIntegrationLogDrainsSourcesBuild    GetIntegrationLogDrainsSources = "build"
	GetIntegrationLogDrainsSourcesEdge     GetIntegrationLogDrainsSources = "edge"
	GetIntegrationLogDrainsSourcesLambda   GetIntegrationLogDrainsSources = "lambda"
	GetIntegrationLogDrainsSourcesStatic   GetIntegrationLogDrainsSources = "static"
	GetIntegrationLogDrainsSourcesExternal GetIntegrationLogDrainsSources = "external"
	GetIntegrationLogDrainsSourcesFirewall GetIntegrationLogDrainsSources = "firewall"
)

func (e GetIntegrationLogDrainsSources) ToPointer() *GetIntegrationLogDrainsSources {
	return &e
}
func (e *GetIntegrationLogDrainsSources) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "build":
		fallthrough
	case "edge":
		fallthrough
	case "lambda":
		fallthrough
	case "static":
		fallthrough
	case "external":
		fallthrough
	case "firewall":
		*e = GetIntegrationLogDrainsSources(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetIntegrationLogDrainsSources: %v", v)
	}
}

// CreatedFrom - Whether the log drain was created by an integration or by a user
type CreatedFrom string

const (
	CreatedFromIntegration CreatedFrom = "integration"
	CreatedFromSelfServed  CreatedFrom = "self-served"
)

func (e CreatedFrom) ToPointer() *CreatedFrom {
	return &e
}
func (e *CreatedFrom) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "integration":
		fallthrough
	case "self-served":
		*e = CreatedFrom(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CreatedFrom: %v", v)
	}
}

// GetIntegrationLogDrainsEnvironments - The environment of log drain
type GetIntegrationLogDrainsEnvironments string

const (
	GetIntegrationLogDrainsEnvironmentsProduction GetIntegrationLogDrainsEnvironments = "production"
	GetIntegrationLogDrainsEnvironmentsPreview    GetIntegrationLogDrainsEnvironments = "preview"
)

func (e GetIntegrationLogDrainsEnvironments) ToPointer() *GetIntegrationLogDrainsEnvironments {
	return &e
}
func (e *GetIntegrationLogDrainsEnvironments) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "production":
		fallthrough
	case "preview":
		*e = GetIntegrationLogDrainsEnvironments(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetIntegrationLogDrainsEnvironments: %v", v)
	}
}

type GetIntegrationLogDrainsResponseBody struct {
	// The oauth2 client application id that created this log drain
	ClientID *string `json:"clientId,omitempty"`
	// The client configuration this log drain was created with
	ConfigurationID *string `json:"configurationId,omitempty"`
	// A timestamp that tells you when the log drain was created
	CreatedAt float64 `json:"createdAt"`
	// The unique identifier of the log drain. Always prefixed with `ld_`
	ID string `json:"id"`
	// The delivery log format
	DeliveryFormat *GetIntegrationLogDrainsDeliveryFormat `json:"deliveryFormat,omitempty"`
	// The name of the log drain
	Name string `json:"name"`
	// The identifier of the team or user whose events will trigger the log drain
	OwnerID   string  `json:"ownerId"`
	ProjectID *string `json:"projectId,omitempty"`
	// The identifier of the projects this log drain is associated with
	ProjectIds []string `json:"projectIds,omitempty"`
	// The URL to call when logs are generated
	URL string `json:"url"`
	// The sources from which logs are currently being delivered to this log drain.
	Sources []GetIntegrationLogDrainsSources `json:"sources,omitempty"`
	// Whether the log drain was created by an integration or by a user
	CreatedFrom *CreatedFrom `json:"createdFrom,omitempty"`
	// The headers to send with the request
	Headers map[string]string `json:"headers,omitempty"`
	// The environment of log drain
	Environments []GetIntegrationLogDrainsEnvironments `json:"environments"`
	// The branch regexp of log drain
	Branch *string `json:"branch,omitempty"`
	// The sampling rate of log drain
	SamplingRate *float64 `json:"samplingRate,omitempty"`
}

func (o *GetIntegrationLogDrainsResponseBody) GetClientID() *string {
	if o == nil {
		return nil
	}
	return o.ClientID
}

func (o *GetIntegrationLogDrainsResponseBody) GetConfigurationID() *string {
	if o == nil {
		return nil
	}
	return o.ConfigurationID
}

func (o *GetIntegrationLogDrainsResponseBody) GetCreatedAt() float64 {
	if o == nil {
		return 0.0
	}
	return o.CreatedAt
}

func (o *GetIntegrationLogDrainsResponseBody) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *GetIntegrationLogDrainsResponseBody) GetDeliveryFormat() *GetIntegrationLogDrainsDeliveryFormat {
	if o == nil {
		return nil
	}
	return o.DeliveryFormat
}

func (o *GetIntegrationLogDrainsResponseBody) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

func (o *GetIntegrationLogDrainsResponseBody) GetOwnerID() string {
	if o == nil {
		return ""
	}
	return o.OwnerID
}

func (o *GetIntegrationLogDrainsResponseBody) GetProjectID() *string {
	if o == nil {
		return nil
	}
	return o.ProjectID
}

func (o *GetIntegrationLogDrainsResponseBody) GetProjectIds() []string {
	if o == nil {
		return nil
	}
	return o.ProjectIds
}

func (o *GetIntegrationLogDrainsResponseBody) GetURL() string {
	if o == nil {
		return ""
	}
	return o.URL
}

func (o *GetIntegrationLogDrainsResponseBody) GetSources() []GetIntegrationLogDrainsSources {
	if o == nil {
		return nil
	}
	return o.Sources
}

func (o *GetIntegrationLogDrainsResponseBody) GetCreatedFrom() *CreatedFrom {
	if o == nil {
		return nil
	}
	return o.CreatedFrom
}

func (o *GetIntegrationLogDrainsResponseBody) GetHeaders() map[string]string {
	if o == nil {
		return nil
	}
	return o.Headers
}

func (o *GetIntegrationLogDrainsResponseBody) GetEnvironments() []GetIntegrationLogDrainsEnvironments {
	if o == nil {
		return []GetIntegrationLogDrainsEnvironments{}
	}
	return o.Environments
}

func (o *GetIntegrationLogDrainsResponseBody) GetBranch() *string {
	if o == nil {
		return nil
	}
	return o.Branch
}

func (o *GetIntegrationLogDrainsResponseBody) GetSamplingRate() *float64 {
	if o == nil {
		return nil
	}
	return o.SamplingRate
}

type GetIntegrationLogDrainsResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// A list of log drains
	ResponseBodies []GetIntegrationLogDrainsResponseBody
}

func (o *GetIntegrationLogDrainsResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *GetIntegrationLogDrainsResponse) GetResponseBodies() []GetIntegrationLogDrainsResponseBody {
	if o == nil {
		return nil
	}
	return o.ResponseBodies
}
