// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type BuyDomainRequestBody struct {
	// The domain name to purchase.
	Name string `json:"name"`
	// The price you expect to be charged for the purchase.
	ExpectedPrice *float64 `json:"expectedPrice,omitempty"`
	// Indicates whether the domain should be automatically renewed.
	Renew *bool `json:"renew,omitempty"`
	// The country of the domain registrant
	Country string `json:"country"`
	// The company name of the domain registrant
	OrgName *string `json:"orgName,omitempty"`
	// The first name of the domain registrant
	FirstName string `json:"firstName"`
	// The last name of the domain registrant
	LastName string `json:"lastName"`
	// The street address of the domain registrant
	Address1 string `json:"address1"`
	// The city of the domain registrant
	City string `json:"city"`
	// The state of the domain registrant
	State string `json:"state"`
	// The postal code of the domain registrant
	PostalCode string `json:"postalCode"`
	// The phone number of the domain registrant
	Phone string `json:"phone"`
	// The email of the domain registrant
	Email string `json:"email"`
}

func (o *BuyDomainRequestBody) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

func (o *BuyDomainRequestBody) GetExpectedPrice() *float64 {
	if o == nil {
		return nil
	}
	return o.ExpectedPrice
}

func (o *BuyDomainRequestBody) GetRenew() *bool {
	if o == nil {
		return nil
	}
	return o.Renew
}

func (o *BuyDomainRequestBody) GetCountry() string {
	if o == nil {
		return ""
	}
	return o.Country
}

func (o *BuyDomainRequestBody) GetOrgName() *string {
	if o == nil {
		return nil
	}
	return o.OrgName
}

func (o *BuyDomainRequestBody) GetFirstName() string {
	if o == nil {
		return ""
	}
	return o.FirstName
}

func (o *BuyDomainRequestBody) GetLastName() string {
	if o == nil {
		return ""
	}
	return o.LastName
}

func (o *BuyDomainRequestBody) GetAddress1() string {
	if o == nil {
		return ""
	}
	return o.Address1
}

func (o *BuyDomainRequestBody) GetCity() string {
	if o == nil {
		return ""
	}
	return o.City
}

func (o *BuyDomainRequestBody) GetState() string {
	if o == nil {
		return ""
	}
	return o.State
}

func (o *BuyDomainRequestBody) GetPostalCode() string {
	if o == nil {
		return ""
	}
	return o.PostalCode
}

func (o *BuyDomainRequestBody) GetPhone() string {
	if o == nil {
		return ""
	}
	return o.Phone
}

func (o *BuyDomainRequestBody) GetEmail() string {
	if o == nil {
		return ""
	}
	return o.Email
}

type BuyDomainRequest struct {
	// The Team identifier to perform the request on behalf of.
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
	// The Team slug to perform the request on behalf of.
	Slug        *string              `queryParam:"style=form,explode=true,name=slug"`
	RequestBody BuyDomainRequestBody `request:"mediaType=application/json"`
}

func (o *BuyDomainRequest) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *BuyDomainRequest) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

func (o *BuyDomainRequest) GetRequestBody() BuyDomainRequestBody {
	if o == nil {
		return BuyDomainRequestBody{}
	}
	return o.RequestBody
}

type BuyDomainDomain struct {
	UID      string   `json:"uid"`
	Ns       []string `json:"ns"`
	Verified bool     `json:"verified"`
	Created  float64  `json:"created"`
	Pending  bool     `json:"pending"`
}

func (o *BuyDomainDomain) GetUID() string {
	if o == nil {
		return ""
	}
	return o.UID
}

func (o *BuyDomainDomain) GetNs() []string {
	if o == nil {
		return []string{}
	}
	return o.Ns
}

func (o *BuyDomainDomain) GetVerified() bool {
	if o == nil {
		return false
	}
	return o.Verified
}

func (o *BuyDomainDomain) GetCreated() float64 {
	if o == nil {
		return 0.0
	}
	return o.Created
}

func (o *BuyDomainDomain) GetPending() bool {
	if o == nil {
		return false
	}
	return o.Pending
}

type BuyDomainDomainsResponseBody struct {
	Domain BuyDomainDomain `json:"domain"`
}

func (o *BuyDomainDomainsResponseBody) GetDomain() BuyDomainDomain {
	if o == nil {
		return BuyDomainDomain{}
	}
	return o.Domain
}

type BuyDomainDomainsDomain struct {
	UID      string   `json:"uid"`
	Ns       []string `json:"ns"`
	Verified bool     `json:"verified"`
	Created  float64  `json:"created"`
	Pending  bool     `json:"pending"`
}

func (o *BuyDomainDomainsDomain) GetUID() string {
	if o == nil {
		return ""
	}
	return o.UID
}

func (o *BuyDomainDomainsDomain) GetNs() []string {
	if o == nil {
		return []string{}
	}
	return o.Ns
}

func (o *BuyDomainDomainsDomain) GetVerified() bool {
	if o == nil {
		return false
	}
	return o.Verified
}

func (o *BuyDomainDomainsDomain) GetCreated() float64 {
	if o == nil {
		return 0.0
	}
	return o.Created
}

func (o *BuyDomainDomainsDomain) GetPending() bool {
	if o == nil {
		return false
	}
	return o.Pending
}

type BuyDomainResponseBody struct {
	Domain BuyDomainDomainsDomain `json:"domain"`
}

func (o *BuyDomainResponseBody) GetDomain() BuyDomainDomainsDomain {
	if o == nil {
		return BuyDomainDomainsDomain{}
	}
	return o.Domain
}

type BuyDomainResponse struct {
	HTTPMeta                              components.HTTPMetadata `json:"-"`
	TwoHundredAndOneApplicationJSONObject *BuyDomainResponseBody
	TwoHundredAndTwoApplicationJSONObject *BuyDomainDomainsResponseBody
}

func (o *BuyDomainResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *BuyDomainResponse) GetTwoHundredAndOneApplicationJSONObject() *BuyDomainResponseBody {
	if o == nil {
		return nil
	}
	return o.TwoHundredAndOneApplicationJSONObject
}

func (o *BuyDomainResponse) GetTwoHundredAndTwoApplicationJSONObject() *BuyDomainDomainsResponseBody {
	if o == nil {
		return nil
	}
	return o.TwoHundredAndTwoApplicationJSONObject
}