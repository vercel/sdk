// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"mockserver/internal/sdk/models/components"
)

type GetDomainsRequest struct {
	// Maximum number of domains to list from a request.
	Limit *float64 `queryParam:"style=form,explode=true,name=limit"`
	// Get domains created after this JavaScript timestamp.
	Since *float64 `queryParam:"style=form,explode=true,name=since"`
	// Get domains created before this JavaScript timestamp.
	Until *float64 `queryParam:"style=form,explode=true,name=until"`
	// The Team identifier to perform the request on behalf of.
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
	// The Team slug to perform the request on behalf of.
	Slug *string `queryParam:"style=form,explode=true,name=slug"`
}

func (o *GetDomainsRequest) GetLimit() *float64 {
	if o == nil {
		return nil
	}
	return o.Limit
}

func (o *GetDomainsRequest) GetSince() *float64 {
	if o == nil {
		return nil
	}
	return o.Since
}

func (o *GetDomainsRequest) GetUntil() *float64 {
	if o == nil {
		return nil
	}
	return o.Until
}

func (o *GetDomainsRequest) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *GetDomainsRequest) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

// GetDomainsCreator - An object containing information of the domain creator, including the user's id, username, and email.
type GetDomainsCreator struct {
	Username         string  `json:"username"`
	Email            string  `json:"email"`
	CustomerID       *string `json:"customerId,omitempty"`
	IsDomainReseller *bool   `json:"isDomainReseller,omitempty"`
	ID               string  `json:"id"`
}

func (o *GetDomainsCreator) GetUsername() string {
	if o == nil {
		return ""
	}
	return o.Username
}

func (o *GetDomainsCreator) GetEmail() string {
	if o == nil {
		return ""
	}
	return o.Email
}

func (o *GetDomainsCreator) GetCustomerID() *string {
	if o == nil {
		return nil
	}
	return o.CustomerID
}

func (o *GetDomainsCreator) GetIsDomainReseller() *bool {
	if o == nil {
		return nil
	}
	return o.IsDomainReseller
}

func (o *GetDomainsCreator) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

// GetDomainsServiceType - The type of service the domain is handled by. `external` if the DNS is externally handled, `zeit.world` if handled with Vercel, or `na` if the service is not available.
type GetDomainsServiceType string

const (
	GetDomainsServiceTypeZeitWorld GetDomainsServiceType = "zeit.world"
	GetDomainsServiceTypeExternal  GetDomainsServiceType = "external"
	GetDomainsServiceTypeNa        GetDomainsServiceType = "na"
)

func (e GetDomainsServiceType) ToPointer() *GetDomainsServiceType {
	return &e
}
func (e *GetDomainsServiceType) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "zeit.world":
		fallthrough
	case "external":
		fallthrough
	case "na":
		*e = GetDomainsServiceType(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetDomainsServiceType: %v", v)
	}
}

type GetDomainsDomain struct {
	// If the domain has the ownership verified.
	Verified bool `json:"verified"`
	// A list of the current nameservers of the domain.
	Nameservers []string `json:"nameservers"`
	// A list of the intended nameservers for the domain to point to Vercel DNS.
	IntendedNameservers []string `json:"intendedNameservers"`
	// A list of custom nameservers for the domain to point to. Only applies to domains purchased with Vercel.
	CustomNameservers []string `json:"customNameservers,omitempty"`
	// An object containing information of the domain creator, including the user's id, username, and email.
	Creator GetDomainsCreator `json:"creator"`
	TeamID  *string           `json:"teamId"`
	// Timestamp in milliseconds when the domain was created in the registry.
	CreatedAt float64 `json:"createdAt"`
	// If it was purchased through Vercel, the timestamp in milliseconds when it was purchased.
	BoughtAt *float64 `json:"boughtAt"`
	// Timestamp in milliseconds at which the domain is set to expire. `null` if not bought with Vercel.
	ExpiresAt *float64 `json:"expiresAt"`
	// The unique identifier of the domain.
	ID string `json:"id"`
	// The domain name.
	Name string `json:"name"`
	// Timestamp in milliseconds at which the domain was ordered.
	OrderedAt *float64 `json:"orderedAt,omitempty"`
	// Indicates whether the domain is set to automatically renew.
	Renew *bool `json:"renew,omitempty"`
	// The type of service the domain is handled by. `external` if the DNS is externally handled, `zeit.world` if handled with Vercel, or `na` if the service is not available.
	ServiceType GetDomainsServiceType `json:"serviceType"`
	// Timestamp in milliseconds at which the domain was successfully transferred into Vercel. `null` if the transfer is still processing or was never transferred in.
	TransferredAt *float64 `json:"transferredAt,omitempty"`
	// If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated.
	TransferStartedAt *float64 `json:"transferStartedAt,omitempty"`
	UserID            string   `json:"userId"`
}

func (o *GetDomainsDomain) GetVerified() bool {
	if o == nil {
		return false
	}
	return o.Verified
}

func (o *GetDomainsDomain) GetNameservers() []string {
	if o == nil {
		return []string{}
	}
	return o.Nameservers
}

func (o *GetDomainsDomain) GetIntendedNameservers() []string {
	if o == nil {
		return []string{}
	}
	return o.IntendedNameservers
}

func (o *GetDomainsDomain) GetCustomNameservers() []string {
	if o == nil {
		return nil
	}
	return o.CustomNameservers
}

func (o *GetDomainsDomain) GetCreator() GetDomainsCreator {
	if o == nil {
		return GetDomainsCreator{}
	}
	return o.Creator
}

func (o *GetDomainsDomain) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *GetDomainsDomain) GetCreatedAt() float64 {
	if o == nil {
		return 0.0
	}
	return o.CreatedAt
}

func (o *GetDomainsDomain) GetBoughtAt() *float64 {
	if o == nil {
		return nil
	}
	return o.BoughtAt
}

func (o *GetDomainsDomain) GetExpiresAt() *float64 {
	if o == nil {
		return nil
	}
	return o.ExpiresAt
}

func (o *GetDomainsDomain) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *GetDomainsDomain) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

func (o *GetDomainsDomain) GetOrderedAt() *float64 {
	if o == nil {
		return nil
	}
	return o.OrderedAt
}

func (o *GetDomainsDomain) GetRenew() *bool {
	if o == nil {
		return nil
	}
	return o.Renew
}

func (o *GetDomainsDomain) GetServiceType() GetDomainsServiceType {
	if o == nil {
		return GetDomainsServiceType("")
	}
	return o.ServiceType
}

func (o *GetDomainsDomain) GetTransferredAt() *float64 {
	if o == nil {
		return nil
	}
	return o.TransferredAt
}

func (o *GetDomainsDomain) GetTransferStartedAt() *float64 {
	if o == nil {
		return nil
	}
	return o.TransferStartedAt
}

func (o *GetDomainsDomain) GetUserID() string {
	if o == nil {
		return ""
	}
	return o.UserID
}

// GetDomainsResponseBody - Successful response retrieving a list of domains.
type GetDomainsResponseBody struct {
	Domains []GetDomainsDomain `json:"domains"`
	// This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.
	Pagination components.Pagination `json:"pagination"`
}

func (o *GetDomainsResponseBody) GetDomains() []GetDomainsDomain {
	if o == nil {
		return []GetDomainsDomain{}
	}
	return o.Domains
}

func (o *GetDomainsResponseBody) GetPagination() components.Pagination {
	if o == nil {
		return components.Pagination{}
	}
	return o.Pagination
}

type GetDomainsResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Successful response retrieving a list of domains.
	Object *GetDomainsResponseBody
}

func (o *GetDomainsResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *GetDomainsResponse) GetObject() *GetDomainsResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}
