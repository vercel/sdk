// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package assert

import (
	"fmt"
	"mime"
	"net/http"
	"strings"
)

func ContentType(req *http.Request, expected string, isRequired bool) error {
	got := req.Header.Get("Content-Type")

	if got == "" {
		if isRequired {
			return fmt.Errorf("expected Content-Type to be set, got: %s", got)
		}
		return nil
	}

	mimeType, _, err := mime.ParseMediaType(got)
	if err != nil {
		return fmt.Errorf("got Content-Type %s is invalid: %w", got, err)
	}

	expectedMimeType, _, err := mime.ParseMediaType(expected)
	if err != nil {
		return fmt.Errorf("expected Content-Type %s is invalid: %w", expected, err)
	}

	if mimeType != expectedMimeType {
		return fmt.Errorf(
			"expected Content-Type to be %s, got: %s",
			expected,
			got,
		)
	}

	return nil
}

func AcceptHeader(req *http.Request, expectedValues []string) error {
	if len(expectedValues) == 0 {
		return nil
	}

	gotAccept := req.Header.Get("Accept")

	gotValues := strings.Split(gotAccept, ",")

	for i, gotValue := range gotValues {
		mimeType := strings.Split(strings.TrimSpace(gotValue), ";")[0]

		gotMimeType, _, err := mime.ParseMediaType(mimeType)
		if err != nil {
			return fmt.Errorf("got Accept value %s is invalid: %w", gotValue, err)
		}

		gotValues[i] = gotMimeType
	}

	allFound := true

	parsedExpectedValues := make([]string, len(expectedValues))

	for i, expected := range expectedValues {
		mimeType := strings.Split(expected, ";")[0]

		expectedMimeType, _, err := mime.ParseMediaType(mimeType)
		if err != nil {
			return fmt.Errorf("expected Accept value %s is invalid: %w", expected, err)
		}

		parsedExpectedValues[i] = expectedMimeType
	}

	for _, gotValue := range gotValues {
		found := false

		for _, expected := range parsedExpectedValues {
			if expected == gotValue {
				found = true
				break
			}
		}

		if !found {
			allFound = false
			break
		}
	}

	if !allFound {
		return fmt.Errorf("expected Accept value to be one of %s, got: %s", strings.Join(parsedExpectedValues, ", "), gotAccept)
	}

	return nil
}