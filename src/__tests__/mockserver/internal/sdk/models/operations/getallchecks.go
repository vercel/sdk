// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"mockserver/internal/sdk/models/components"
)

type GetAllChecksRequest struct {
	// The deployment to get all checks for
	DeploymentID string `pathParam:"style=simple,explode=false,name=deploymentId"`
	// The Team identifier to perform the request on behalf of.
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
	// The Team slug to perform the request on behalf of.
	Slug *string `queryParam:"style=form,explode=true,name=slug"`
}

func (o *GetAllChecksRequest) GetDeploymentID() string {
	if o == nil {
		return ""
	}
	return o.DeploymentID
}

func (o *GetAllChecksRequest) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *GetAllChecksRequest) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

type GetAllChecksConclusion string

const (
	GetAllChecksConclusionCanceled  GetAllChecksConclusion = "canceled"
	GetAllChecksConclusionFailed    GetAllChecksConclusion = "failed"
	GetAllChecksConclusionNeutral   GetAllChecksConclusion = "neutral"
	GetAllChecksConclusionSucceeded GetAllChecksConclusion = "succeeded"
	GetAllChecksConclusionSkipped   GetAllChecksConclusion = "skipped"
	GetAllChecksConclusionStale     GetAllChecksConclusion = "stale"
)

func (e GetAllChecksConclusion) ToPointer() *GetAllChecksConclusion {
	return &e
}
func (e *GetAllChecksConclusion) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "canceled":
		fallthrough
	case "failed":
		fallthrough
	case "neutral":
		fallthrough
	case "succeeded":
		fallthrough
	case "skipped":
		fallthrough
	case "stale":
		*e = GetAllChecksConclusion(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetAllChecksConclusion: %v", v)
	}
}

type GetAllChecksSource string

const (
	GetAllChecksSourceWebVitals GetAllChecksSource = "web-vitals"
)

func (e GetAllChecksSource) ToPointer() *GetAllChecksSource {
	return &e
}
func (e *GetAllChecksSource) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "web-vitals":
		*e = GetAllChecksSource(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetAllChecksSource: %v", v)
	}
}

type GetAllChecksFCP struct {
	Value         *float64           `json:"value"`
	PreviousValue *float64           `json:"previousValue,omitempty"`
	Source        GetAllChecksSource `json:"source"`
}

func (o *GetAllChecksFCP) GetValue() *float64 {
	if o == nil {
		return nil
	}
	return o.Value
}

func (o *GetAllChecksFCP) GetPreviousValue() *float64 {
	if o == nil {
		return nil
	}
	return o.PreviousValue
}

func (o *GetAllChecksFCP) GetSource() GetAllChecksSource {
	if o == nil {
		return GetAllChecksSource("")
	}
	return o.Source
}

type GetAllChecksChecksSource string

const (
	GetAllChecksChecksSourceWebVitals GetAllChecksChecksSource = "web-vitals"
)

func (e GetAllChecksChecksSource) ToPointer() *GetAllChecksChecksSource {
	return &e
}
func (e *GetAllChecksChecksSource) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "web-vitals":
		*e = GetAllChecksChecksSource(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetAllChecksChecksSource: %v", v)
	}
}

type GetAllChecksLCP struct {
	Value         *float64                 `json:"value"`
	PreviousValue *float64                 `json:"previousValue,omitempty"`
	Source        GetAllChecksChecksSource `json:"source"`
}

func (o *GetAllChecksLCP) GetValue() *float64 {
	if o == nil {
		return nil
	}
	return o.Value
}

func (o *GetAllChecksLCP) GetPreviousValue() *float64 {
	if o == nil {
		return nil
	}
	return o.PreviousValue
}

func (o *GetAllChecksLCP) GetSource() GetAllChecksChecksSource {
	if o == nil {
		return GetAllChecksChecksSource("")
	}
	return o.Source
}

type GetAllChecksChecksResponseSource string

const (
	GetAllChecksChecksResponseSourceWebVitals GetAllChecksChecksResponseSource = "web-vitals"
)

func (e GetAllChecksChecksResponseSource) ToPointer() *GetAllChecksChecksResponseSource {
	return &e
}
func (e *GetAllChecksChecksResponseSource) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "web-vitals":
		*e = GetAllChecksChecksResponseSource(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetAllChecksChecksResponseSource: %v", v)
	}
}

type GetAllChecksCLS struct {
	Value         *float64                         `json:"value"`
	PreviousValue *float64                         `json:"previousValue,omitempty"`
	Source        GetAllChecksChecksResponseSource `json:"source"`
}

func (o *GetAllChecksCLS) GetValue() *float64 {
	if o == nil {
		return nil
	}
	return o.Value
}

func (o *GetAllChecksCLS) GetPreviousValue() *float64 {
	if o == nil {
		return nil
	}
	return o.PreviousValue
}

func (o *GetAllChecksCLS) GetSource() GetAllChecksChecksResponseSource {
	if o == nil {
		return GetAllChecksChecksResponseSource("")
	}
	return o.Source
}

type GetAllChecksChecksResponse200Source string

const (
	GetAllChecksChecksResponse200SourceWebVitals GetAllChecksChecksResponse200Source = "web-vitals"
)

func (e GetAllChecksChecksResponse200Source) ToPointer() *GetAllChecksChecksResponse200Source {
	return &e
}
func (e *GetAllChecksChecksResponse200Source) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "web-vitals":
		*e = GetAllChecksChecksResponse200Source(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetAllChecksChecksResponse200Source: %v", v)
	}
}

type GetAllChecksTBT struct {
	Value         *float64                            `json:"value"`
	PreviousValue *float64                            `json:"previousValue,omitempty"`
	Source        GetAllChecksChecksResponse200Source `json:"source"`
}

func (o *GetAllChecksTBT) GetValue() *float64 {
	if o == nil {
		return nil
	}
	return o.Value
}

func (o *GetAllChecksTBT) GetPreviousValue() *float64 {
	if o == nil {
		return nil
	}
	return o.PreviousValue
}

func (o *GetAllChecksTBT) GetSource() GetAllChecksChecksResponse200Source {
	if o == nil {
		return GetAllChecksChecksResponse200Source("")
	}
	return o.Source
}

type GetAllChecksChecksResponse200ApplicationJSONSource string

const (
	GetAllChecksChecksResponse200ApplicationJSONSourceWebVitals GetAllChecksChecksResponse200ApplicationJSONSource = "web-vitals"
)

func (e GetAllChecksChecksResponse200ApplicationJSONSource) ToPointer() *GetAllChecksChecksResponse200ApplicationJSONSource {
	return &e
}
func (e *GetAllChecksChecksResponse200ApplicationJSONSource) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "web-vitals":
		*e = GetAllChecksChecksResponse200ApplicationJSONSource(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetAllChecksChecksResponse200ApplicationJSONSource: %v", v)
	}
}

type GetAllChecksVirtualExperienceScore struct {
	Value         *float64                                           `json:"value"`
	PreviousValue *float64                                           `json:"previousValue,omitempty"`
	Source        GetAllChecksChecksResponse200ApplicationJSONSource `json:"source"`
}

func (o *GetAllChecksVirtualExperienceScore) GetValue() *float64 {
	if o == nil {
		return nil
	}
	return o.Value
}

func (o *GetAllChecksVirtualExperienceScore) GetPreviousValue() *float64 {
	if o == nil {
		return nil
	}
	return o.PreviousValue
}

func (o *GetAllChecksVirtualExperienceScore) GetSource() GetAllChecksChecksResponse200ApplicationJSONSource {
	if o == nil {
		return GetAllChecksChecksResponse200ApplicationJSONSource("")
	}
	return o.Source
}

type GetAllChecksMetrics struct {
	Fcp                    GetAllChecksFCP                     `json:"FCP"`
	Lcp                    GetAllChecksLCP                     `json:"LCP"`
	Cls                    GetAllChecksCLS                     `json:"CLS"`
	Tbt                    GetAllChecksTBT                     `json:"TBT"`
	VirtualExperienceScore *GetAllChecksVirtualExperienceScore `json:"virtualExperienceScore,omitempty"`
}

func (o *GetAllChecksMetrics) GetFcp() GetAllChecksFCP {
	if o == nil {
		return GetAllChecksFCP{}
	}
	return o.Fcp
}

func (o *GetAllChecksMetrics) GetLcp() GetAllChecksLCP {
	if o == nil {
		return GetAllChecksLCP{}
	}
	return o.Lcp
}

func (o *GetAllChecksMetrics) GetCls() GetAllChecksCLS {
	if o == nil {
		return GetAllChecksCLS{}
	}
	return o.Cls
}

func (o *GetAllChecksMetrics) GetTbt() GetAllChecksTBT {
	if o == nil {
		return GetAllChecksTBT{}
	}
	return o.Tbt
}

func (o *GetAllChecksMetrics) GetVirtualExperienceScore() *GetAllChecksVirtualExperienceScore {
	if o == nil {
		return nil
	}
	return o.VirtualExperienceScore
}

type GetAllChecksOutput struct {
	Metrics *GetAllChecksMetrics `json:"metrics,omitempty"`
}

func (o *GetAllChecksOutput) GetMetrics() *GetAllChecksMetrics {
	if o == nil {
		return nil
	}
	return o.Metrics
}

type GetAllChecksStatus string

const (
	GetAllChecksStatusRegistered GetAllChecksStatus = "registered"
	GetAllChecksStatusRunning    GetAllChecksStatus = "running"
	GetAllChecksStatusCompleted  GetAllChecksStatus = "completed"
)

func (e GetAllChecksStatus) ToPointer() *GetAllChecksStatus {
	return &e
}
func (e *GetAllChecksStatus) UnmarshalJSON(data []byte) error {
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
		*e = GetAllChecksStatus(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetAllChecksStatus: %v", v)
	}
}

type Checks struct {
	CompletedAt   *float64                `json:"completedAt,omitempty"`
	Conclusion    *GetAllChecksConclusion `json:"conclusion,omitempty"`
	CreatedAt     float64                 `json:"createdAt"`
	DetailsURL    *string                 `json:"detailsUrl,omitempty"`
	ID            string                  `json:"id"`
	IntegrationID string                  `json:"integrationId"`
	Name          string                  `json:"name"`
	Output        *GetAllChecksOutput     `json:"output,omitempty"`
	Path          *string                 `json:"path,omitempty"`
	Rerequestable bool                    `json:"rerequestable"`
	StartedAt     *float64                `json:"startedAt,omitempty"`
	Status        GetAllChecksStatus      `json:"status"`
	UpdatedAt     float64                 `json:"updatedAt"`
}

func (o *Checks) GetCompletedAt() *float64 {
	if o == nil {
		return nil
	}
	return o.CompletedAt
}

func (o *Checks) GetConclusion() *GetAllChecksConclusion {
	if o == nil {
		return nil
	}
	return o.Conclusion
}

func (o *Checks) GetCreatedAt() float64 {
	if o == nil {
		return 0.0
	}
	return o.CreatedAt
}

func (o *Checks) GetDetailsURL() *string {
	if o == nil {
		return nil
	}
	return o.DetailsURL
}

func (o *Checks) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *Checks) GetIntegrationID() string {
	if o == nil {
		return ""
	}
	return o.IntegrationID
}

func (o *Checks) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

func (o *Checks) GetOutput() *GetAllChecksOutput {
	if o == nil {
		return nil
	}
	return o.Output
}

func (o *Checks) GetPath() *string {
	if o == nil {
		return nil
	}
	return o.Path
}

func (o *Checks) GetRerequestable() bool {
	if o == nil {
		return false
	}
	return o.Rerequestable
}

func (o *Checks) GetStartedAt() *float64 {
	if o == nil {
		return nil
	}
	return o.StartedAt
}

func (o *Checks) GetStatus() GetAllChecksStatus {
	if o == nil {
		return GetAllChecksStatus("")
	}
	return o.Status
}

func (o *Checks) GetUpdatedAt() float64 {
	if o == nil {
		return 0.0
	}
	return o.UpdatedAt
}

type GetAllChecksResponseBody struct {
	Checks []Checks `json:"checks"`
}

func (o *GetAllChecksResponseBody) GetChecks() []Checks {
	if o == nil {
		return []Checks{}
	}
	return o.Checks
}

type GetAllChecksResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	Object   *GetAllChecksResponseBody
}

func (o *GetAllChecksResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *GetAllChecksResponse) GetObject() *GetAllChecksResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}
