// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"mockserver/internal/sdk/models/components"
)

// DeliveryFormat - The delivery log format
type DeliveryFormat string

const (
	DeliveryFormatJSON   DeliveryFormat = "json"
	DeliveryFormatNdjson DeliveryFormat = "ndjson"
	DeliveryFormatSyslog DeliveryFormat = "syslog"
)

func (e DeliveryFormat) ToPointer() *DeliveryFormat {
	return &e
}
func (e *DeliveryFormat) UnmarshalJSON(data []byte) error {
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
		*e = DeliveryFormat(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DeliveryFormat: %v", v)
	}
}

type Sources string

const (
	SourcesStatic   Sources = "static"
	SourcesLambda   Sources = "lambda"
	SourcesBuild    Sources = "build"
	SourcesEdge     Sources = "edge"
	SourcesExternal Sources = "external"
	SourcesFirewall Sources = "firewall"
)

func (e Sources) ToPointer() *Sources {
	return &e
}
func (e *Sources) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "static":
		fallthrough
	case "lambda":
		fallthrough
	case "build":
		fallthrough
	case "edge":
		fallthrough
	case "external":
		fallthrough
	case "firewall":
		*e = Sources(v)
		return nil
	default:
		return fmt.Errorf("invalid value for Sources: %v", v)
	}
}

type Environments string

const (
	EnvironmentsPreview    Environments = "preview"
	EnvironmentsProduction Environments = "production"
)

func (e Environments) ToPointer() *Environments {
	return &e
}
func (e *Environments) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "preview":
		fallthrough
	case "production":
		*e = Environments(v)
		return nil
	default:
		return fmt.Errorf("invalid value for Environments: %v", v)
	}
}

type CreateLogDrainRequestBody struct {
	// The name of the log drain
	Name       string   `json:"name"`
	ProjectIds []string `json:"projectIds,omitempty"`
	// A secret to sign log drain notification headers so a consumer can verify their authenticity
	Secret *string `json:"secret,omitempty"`
	// The delivery log format
	DeliveryFormat *DeliveryFormat `json:"deliveryFormat,omitempty"`
	// The url where you will receive logs. The protocol must be `https://` or `http://` when type is `json` and `ndjson`, and `syslog+tls:` or `syslog:` when the type is `syslog`.
	URL     string    `json:"url"`
	Sources []Sources `json:"sources,omitempty"`
	// Headers to be sent together with the request
	Headers      map[string]string `json:"headers,omitempty"`
	Environments []Environments    `json:"environments,omitempty"`
}

func (o *CreateLogDrainRequestBody) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

func (o *CreateLogDrainRequestBody) GetProjectIds() []string {
	if o == nil {
		return nil
	}
	return o.ProjectIds
}

func (o *CreateLogDrainRequestBody) GetSecret() *string {
	if o == nil {
		return nil
	}
	return o.Secret
}

func (o *CreateLogDrainRequestBody) GetDeliveryFormat() *DeliveryFormat {
	if o == nil {
		return nil
	}
	return o.DeliveryFormat
}

func (o *CreateLogDrainRequestBody) GetURL() string {
	if o == nil {
		return ""
	}
	return o.URL
}

func (o *CreateLogDrainRequestBody) GetSources() []Sources {
	if o == nil {
		return nil
	}
	return o.Sources
}

func (o *CreateLogDrainRequestBody) GetHeaders() map[string]string {
	if o == nil {
		return nil
	}
	return o.Headers
}

func (o *CreateLogDrainRequestBody) GetEnvironments() []Environments {
	if o == nil {
		return nil
	}
	return o.Environments
}

type CreateLogDrainRequest struct {
	// The Team identifier to perform the request on behalf of.
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
	// The Team slug to perform the request on behalf of.
	Slug        *string                   `queryParam:"style=form,explode=true,name=slug"`
	RequestBody CreateLogDrainRequestBody `request:"mediaType=application/json"`
}

func (o *CreateLogDrainRequest) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *CreateLogDrainRequest) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

func (o *CreateLogDrainRequest) GetRequestBody() CreateLogDrainRequestBody {
	if o == nil {
		return CreateLogDrainRequestBody{}
	}
	return o.RequestBody
}

// CreateLogDrainDeliveryFormat - The delivery log format
type CreateLogDrainDeliveryFormat string

const (
	CreateLogDrainDeliveryFormatJSON     CreateLogDrainDeliveryFormat = "json"
	CreateLogDrainDeliveryFormatNdjson   CreateLogDrainDeliveryFormat = "ndjson"
	CreateLogDrainDeliveryFormatSyslog   CreateLogDrainDeliveryFormat = "syslog"
	CreateLogDrainDeliveryFormatProtobuf CreateLogDrainDeliveryFormat = "protobuf"
)

func (e CreateLogDrainDeliveryFormat) ToPointer() *CreateLogDrainDeliveryFormat {
	return &e
}
func (e *CreateLogDrainDeliveryFormat) UnmarshalJSON(data []byte) error {
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
		*e = CreateLogDrainDeliveryFormat(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CreateLogDrainDeliveryFormat: %v", v)
	}
}

// CreateLogDrainSources - The sources from which logs are currently being delivered to this log drain.
type CreateLogDrainSources string

const (
	CreateLogDrainSourcesBuild    CreateLogDrainSources = "build"
	CreateLogDrainSourcesEdge     CreateLogDrainSources = "edge"
	CreateLogDrainSourcesLambda   CreateLogDrainSources = "lambda"
	CreateLogDrainSourcesStatic   CreateLogDrainSources = "static"
	CreateLogDrainSourcesExternal CreateLogDrainSources = "external"
	CreateLogDrainSourcesFirewall CreateLogDrainSources = "firewall"
)

func (e CreateLogDrainSources) ToPointer() *CreateLogDrainSources {
	return &e
}
func (e *CreateLogDrainSources) UnmarshalJSON(data []byte) error {
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
		*e = CreateLogDrainSources(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CreateLogDrainSources: %v", v)
	}
}

// CreateLogDrainCreatedFrom - Whether the log drain was created by an integration or by a user
type CreateLogDrainCreatedFrom string

const (
	CreateLogDrainCreatedFromIntegration CreateLogDrainCreatedFrom = "integration"
	CreateLogDrainCreatedFromSelfServed  CreateLogDrainCreatedFrom = "self-served"
)

func (e CreateLogDrainCreatedFrom) ToPointer() *CreateLogDrainCreatedFrom {
	return &e
}
func (e *CreateLogDrainCreatedFrom) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "integration":
		fallthrough
	case "self-served":
		*e = CreateLogDrainCreatedFrom(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CreateLogDrainCreatedFrom: %v", v)
	}
}

// CreateLogDrainEnvironments - The environment of log drain
type CreateLogDrainEnvironments string

const (
	CreateLogDrainEnvironmentsProduction CreateLogDrainEnvironments = "production"
	CreateLogDrainEnvironmentsPreview    CreateLogDrainEnvironments = "preview"
)

func (e CreateLogDrainEnvironments) ToPointer() *CreateLogDrainEnvironments {
	return &e
}
func (e *CreateLogDrainEnvironments) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "production":
		fallthrough
	case "preview":
		*e = CreateLogDrainEnvironments(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CreateLogDrainEnvironments: %v", v)
	}
}

// CreateLogDrainResponseBody - The log drain was successfully created
type CreateLogDrainResponseBody struct {
	// The oauth2 client application id that created this log drain
	ClientID *string `json:"clientId,omitempty"`
	// The client configuration this log drain was created with
	ConfigurationID *string `json:"configurationId,omitempty"`
	// A timestamp that tells you when the log drain was created
	CreatedAt float64 `json:"createdAt"`
	// The unique identifier of the log drain. Always prefixed with `ld_`
	ID string `json:"id"`
	// The delivery log format
	DeliveryFormat *CreateLogDrainDeliveryFormat `json:"deliveryFormat,omitempty"`
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
	Sources []CreateLogDrainSources `json:"sources,omitempty"`
	// Whether the log drain was created by an integration or by a user
	CreatedFrom *CreateLogDrainCreatedFrom `json:"createdFrom,omitempty"`
	// The headers to send with the request
	Headers map[string]string `json:"headers,omitempty"`
	// The environment of log drain
	Environments []CreateLogDrainEnvironments `json:"environments"`
	// The branch regexp of log drain
	Branch *string `json:"branch,omitempty"`
	// The sampling rate of log drain
	SamplingRate *float64 `json:"samplingRate,omitempty"`
}

func (o *CreateLogDrainResponseBody) GetClientID() *string {
	if o == nil {
		return nil
	}
	return o.ClientID
}

func (o *CreateLogDrainResponseBody) GetConfigurationID() *string {
	if o == nil {
		return nil
	}
	return o.ConfigurationID
}

func (o *CreateLogDrainResponseBody) GetCreatedAt() float64 {
	if o == nil {
		return 0.0
	}
	return o.CreatedAt
}

func (o *CreateLogDrainResponseBody) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *CreateLogDrainResponseBody) GetDeliveryFormat() *CreateLogDrainDeliveryFormat {
	if o == nil {
		return nil
	}
	return o.DeliveryFormat
}

func (o *CreateLogDrainResponseBody) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

func (o *CreateLogDrainResponseBody) GetOwnerID() string {
	if o == nil {
		return ""
	}
	return o.OwnerID
}

func (o *CreateLogDrainResponseBody) GetProjectID() *string {
	if o == nil {
		return nil
	}
	return o.ProjectID
}

func (o *CreateLogDrainResponseBody) GetProjectIds() []string {
	if o == nil {
		return nil
	}
	return o.ProjectIds
}

func (o *CreateLogDrainResponseBody) GetURL() string {
	if o == nil {
		return ""
	}
	return o.URL
}

func (o *CreateLogDrainResponseBody) GetSources() []CreateLogDrainSources {
	if o == nil {
		return nil
	}
	return o.Sources
}

func (o *CreateLogDrainResponseBody) GetCreatedFrom() *CreateLogDrainCreatedFrom {
	if o == nil {
		return nil
	}
	return o.CreatedFrom
}

func (o *CreateLogDrainResponseBody) GetHeaders() map[string]string {
	if o == nil {
		return nil
	}
	return o.Headers
}

func (o *CreateLogDrainResponseBody) GetEnvironments() []CreateLogDrainEnvironments {
	if o == nil {
		return []CreateLogDrainEnvironments{}
	}
	return o.Environments
}

func (o *CreateLogDrainResponseBody) GetBranch() *string {
	if o == nil {
		return nil
	}
	return o.Branch
}

func (o *CreateLogDrainResponseBody) GetSamplingRate() *float64 {
	if o == nil {
		return nil
	}
	return o.SamplingRate
}

type CreateLogDrainResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// The log drain was successfully created
	Object *CreateLogDrainResponseBody
}

func (o *CreateLogDrainResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *CreateLogDrainResponse) GetObject() *CreateLogDrainResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}
