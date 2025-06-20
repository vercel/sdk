// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"mockserver/internal/sdk/models/components"
)

// GrantType - The grant type, when using x-www-form-urlencoded content type
type GrantType string

const (
	GrantTypeAuthorizationCode GrantType = "authorization_code"
)

func (e GrantType) ToPointer() *GrantType {
	return &e
}
func (e *GrantType) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "authorization_code":
		*e = GrantType(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GrantType: %v", v)
	}
}

type ExchangeSsoTokenRequest struct {
	// The sensitive code received from Vercel
	Code string `json:"code"`
	// The state received from the initialization request
	State *string `json:"state,omitempty"`
	// The integration client id
	ClientID string `json:"client_id"`
	// The integration client secret
	ClientSecret string `json:"client_secret"`
	// The integration redirect URI
	RedirectURI *string `json:"redirect_uri,omitempty"`
	// The grant type, when using x-www-form-urlencoded content type
	GrantType *GrantType `json:"grant_type,omitempty"`
}

func (o *ExchangeSsoTokenRequest) GetCode() string {
	if o == nil {
		return ""
	}
	return o.Code
}

func (o *ExchangeSsoTokenRequest) GetState() *string {
	if o == nil {
		return nil
	}
	return o.State
}

func (o *ExchangeSsoTokenRequest) GetClientID() string {
	if o == nil {
		return ""
	}
	return o.ClientID
}

func (o *ExchangeSsoTokenRequest) GetClientSecret() string {
	if o == nil {
		return ""
	}
	return o.ClientSecret
}

func (o *ExchangeSsoTokenRequest) GetRedirectURI() *string {
	if o == nil {
		return nil
	}
	return o.RedirectURI
}

func (o *ExchangeSsoTokenRequest) GetGrantType() *GrantType {
	if o == nil {
		return nil
	}
	return o.GrantType
}

type ExchangeSsoTokenResponseBody struct {
	IDToken     string `json:"id_token"`
	AccessToken any    `json:"access_token"`
	TokenType   any    `json:"token_type"`
}

func (o *ExchangeSsoTokenResponseBody) GetIDToken() string {
	if o == nil {
		return ""
	}
	return o.IDToken
}

func (o *ExchangeSsoTokenResponseBody) GetAccessToken() any {
	if o == nil {
		return nil
	}
	return o.AccessToken
}

func (o *ExchangeSsoTokenResponseBody) GetTokenType() any {
	if o == nil {
		return nil
	}
	return o.TokenType
}

type ExchangeSsoTokenResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	Object   *ExchangeSsoTokenResponseBody
}

func (o *ExchangeSsoTokenResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *ExchangeSsoTokenResponse) GetObject() *ExchangeSsoTokenResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}
