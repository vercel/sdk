// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"errors"
	"fmt"
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
)

type GetTeamsRequest struct {
	// Maximum number of Teams which may be returned.
	Limit *float64 `queryParam:"style=form,explode=true,name=limit"`
	// Timestamp (in milliseconds) to only include Teams created since then.
	Since *float64 `queryParam:"style=form,explode=true,name=since"`
	// Timestamp (in milliseconds) to only include Teams created until then.
	Until *float64 `queryParam:"style=form,explode=true,name=until"`
}

func (o *GetTeamsRequest) GetLimit() *float64 {
	if o == nil {
		return nil
	}
	return o.Limit
}

func (o *GetTeamsRequest) GetSince() *float64 {
	if o == nil {
		return nil
	}
	return o.Since
}

func (o *GetTeamsRequest) GetUntil() *float64 {
	if o == nil {
		return nil
	}
	return o.Until
}

type TeamsType string

const (
	TeamsTypeMapOfAny    TeamsType = "mapOfAny"
	TeamsTypeTeamLimited TeamsType = "TeamLimited"
)

type Teams struct {
	MapOfAny    map[string]any
	TeamLimited *components.TeamLimited

	Type TeamsType
}

func CreateTeamsMapOfAny(mapOfAny map[string]any) Teams {
	typ := TeamsTypeMapOfAny

	return Teams{
		MapOfAny: mapOfAny,
		Type:     typ,
	}
}

func CreateTeamsTeamLimited(teamLimited components.TeamLimited) Teams {
	typ := TeamsTypeTeamLimited

	return Teams{
		TeamLimited: &teamLimited,
		Type:        typ,
	}
}

func (u *Teams) UnmarshalJSON(data []byte) error {

	var teamLimited components.TeamLimited = components.TeamLimited{}
	if err := utils.UnmarshalJSON(data, &teamLimited, "", true, true); err == nil {
		u.TeamLimited = &teamLimited
		u.Type = TeamsTypeTeamLimited
		return nil
	}

	var mapOfAny map[string]any = map[string]any{}
	if err := utils.UnmarshalJSON(data, &mapOfAny, "", true, true); err == nil {
		u.MapOfAny = mapOfAny
		u.Type = TeamsTypeMapOfAny
		return nil
	}

	return fmt.Errorf("could not unmarshal `%s` into any supported union types for Teams", string(data))
}

func (u Teams) MarshalJSON() ([]byte, error) {
	if u.MapOfAny != nil {
		return utils.MarshalJSON(u.MapOfAny, "", true)
	}

	if u.TeamLimited != nil {
		return utils.MarshalJSON(u.TeamLimited, "", true)
	}

	return nil, errors.New("could not marshal union type Teams: all fields are null")
}

// GetTeamsResponseBody - A paginated list of teams.
type GetTeamsResponseBody struct {
	Teams []Teams `json:"teams"`
	// This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.
	Pagination components.Pagination `json:"pagination"`
}

func (o *GetTeamsResponseBody) GetTeams() []Teams {
	if o == nil {
		return []Teams{}
	}
	return o.Teams
}

func (o *GetTeamsResponseBody) GetPagination() components.Pagination {
	if o == nil {
		return components.Pagination{}
	}
	return o.Pagination
}

type GetTeamsResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// A paginated list of teams.
	Object *GetTeamsResponseBody
}

func (o *GetTeamsResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *GetTeamsResponse) GetObject() *GetTeamsResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}