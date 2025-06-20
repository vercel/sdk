// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"errors"
	"fmt"
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
)

type GetAuthUserUserType string

const (
	GetAuthUserUserTypeAuthUser        GetAuthUserUserType = "AuthUser"
	GetAuthUserUserTypeAuthUserLimited GetAuthUserUserType = "AuthUserLimited"
)

type GetAuthUserUser struct {
	AuthUser        *components.AuthUser        `queryParam:"inline"`
	AuthUserLimited *components.AuthUserLimited `queryParam:"inline"`

	Type GetAuthUserUserType
}

func CreateGetAuthUserUserAuthUser(authUser components.AuthUser) GetAuthUserUser {
	typ := GetAuthUserUserTypeAuthUser

	return GetAuthUserUser{
		AuthUser: &authUser,
		Type:     typ,
	}
}

func CreateGetAuthUserUserAuthUserLimited(authUserLimited components.AuthUserLimited) GetAuthUserUser {
	typ := GetAuthUserUserTypeAuthUserLimited

	return GetAuthUserUser{
		AuthUserLimited: &authUserLimited,
		Type:            typ,
	}
}

func (u *GetAuthUserUser) UnmarshalJSON(data []byte) error {

	var authUserLimited components.AuthUserLimited = components.AuthUserLimited{}
	if err := utils.UnmarshalJSON(data, &authUserLimited, "", true, true); err == nil {
		u.AuthUserLimited = &authUserLimited
		u.Type = GetAuthUserUserTypeAuthUserLimited
		return nil
	}

	var authUser components.AuthUser = components.AuthUser{}
	if err := utils.UnmarshalJSON(data, &authUser, "", true, true); err == nil {
		u.AuthUser = &authUser
		u.Type = GetAuthUserUserTypeAuthUser
		return nil
	}

	return fmt.Errorf("could not unmarshal `%s` into any supported union types for GetAuthUserUser", string(data))
}

func (u GetAuthUserUser) MarshalJSON() ([]byte, error) {
	if u.AuthUser != nil {
		return utils.MarshalJSON(u.AuthUser, "", true)
	}

	if u.AuthUserLimited != nil {
		return utils.MarshalJSON(u.AuthUserLimited, "", true)
	}

	return nil, errors.New("could not marshal union type GetAuthUserUser: all fields are null")
}

// GetAuthUserResponseBody - Successful response.
type GetAuthUserResponseBody struct {
	User GetAuthUserUser `json:"user"`
}

func (o *GetAuthUserResponseBody) GetUser() GetAuthUserUser {
	if o == nil {
		return GetAuthUserUser{}
	}
	return o.User
}

type GetAuthUserResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Successful response.
	Object *GetAuthUserResponseBody
}

func (o *GetAuthUserResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *GetAuthUserResponse) GetObject() *GetAuthUserResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}
