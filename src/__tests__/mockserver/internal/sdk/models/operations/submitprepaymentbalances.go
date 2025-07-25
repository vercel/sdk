// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
	"time"
)

// Balance - A credit balance for a particular token type
type Balance struct {
	// Partner's resource ID, exclude if credits are tied to the installation and not an individual resource.
	ResourceID *string `json:"resourceId,omitempty"`
	// A human-readable description of the credits the user currently has, e.g. \"2,000 Tokens\"
	Credit *string `json:"credit,omitempty"`
	// The name of the credits, for display purposes, e.g. \"Tokens\"
	NameLabel *string `json:"nameLabel,omitempty"`
	// The dollar value of the credit balance, in USD and provided in cents, which is used to trigger automatic purchase thresholds.
	CurrencyValueInCents float64 `json:"currencyValueInCents"`
}

func (o *Balance) GetResourceID() *string {
	if o == nil {
		return nil
	}
	return o.ResourceID
}

func (o *Balance) GetCredit() *string {
	if o == nil {
		return nil
	}
	return o.Credit
}

func (o *Balance) GetNameLabel() *string {
	if o == nil {
		return nil
	}
	return o.NameLabel
}

func (o *Balance) GetCurrencyValueInCents() float64 {
	if o == nil {
		return 0.0
	}
	return o.CurrencyValueInCents
}

type SubmitPrepaymentBalancesRequestBody struct {
	// Server time of your integration, used to determine the most recent data for race conditions & updates. Only the latest usage data for a given day, week, and month will be kept.
	Timestamp time.Time `json:"timestamp"`
	Balances  []Balance `json:"balances"`
}

func (s SubmitPrepaymentBalancesRequestBody) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(s, "", false)
}

func (s *SubmitPrepaymentBalancesRequestBody) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &s, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *SubmitPrepaymentBalancesRequestBody) GetTimestamp() time.Time {
	if o == nil {
		return time.Time{}
	}
	return o.Timestamp
}

func (o *SubmitPrepaymentBalancesRequestBody) GetBalances() []Balance {
	if o == nil {
		return []Balance{}
	}
	return o.Balances
}

type SubmitPrepaymentBalancesRequest struct {
	IntegrationConfigurationID string                               `pathParam:"style=simple,explode=false,name=integrationConfigurationId"`
	RequestBody                *SubmitPrepaymentBalancesRequestBody `request:"mediaType=application/json"`
}

func (o *SubmitPrepaymentBalancesRequest) GetIntegrationConfigurationID() string {
	if o == nil {
		return ""
	}
	return o.IntegrationConfigurationID
}

func (o *SubmitPrepaymentBalancesRequest) GetRequestBody() *SubmitPrepaymentBalancesRequestBody {
	if o == nil {
		return nil
	}
	return o.RequestBody
}

type SubmitPrepaymentBalancesResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
}

func (o *SubmitPrepaymentBalancesResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}
