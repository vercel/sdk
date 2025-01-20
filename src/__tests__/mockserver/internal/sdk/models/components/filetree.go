// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"encoding/json"
	"fmt"
)

// Type - String indicating the type of file tree entry.
type Type string

const (
	TypeDirectory  Type = "directory"
	TypeFile       Type = "file"
	TypeSymlink    Type = "symlink"
	TypeLambda     Type = "lambda"
	TypeMiddleware Type = "middleware"
	TypeInvalid    Type = "invalid"
)

func (e Type) ToPointer() *Type {
	return &e
}
func (e *Type) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "directory":
		fallthrough
	case "file":
		fallthrough
	case "symlink":
		fallthrough
	case "lambda":
		fallthrough
	case "middleware":
		fallthrough
	case "invalid":
		*e = Type(v)
		return nil
	default:
		return fmt.Errorf("invalid value for Type: %v", v)
	}
}

// FileTree - A deployment file tree entry
type FileTree struct {
	// The name of the file tree entry
	Name string `json:"name"`
	// String indicating the type of file tree entry.
	Type Type `json:"type"`
	// The unique identifier of the file (only valid for the `file` type)
	UID *string `json:"uid,omitempty"`
	// The list of children files of the directory (only valid for the `directory` type)
	Children []FileTree `json:"children,omitempty"`
	// The content-type of the file (only valid for the `file` type)
	ContentType *string `json:"contentType,omitempty"`
	// The file "mode" indicating file type and permissions.
	Mode float64 `json:"mode"`
	// Not currently used. See `file-list-to-tree.ts`.
	Symlink *string `json:"symlink,omitempty"`
}

func (o *FileTree) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

func (o *FileTree) GetType() Type {
	if o == nil {
		return Type("")
	}
	return o.Type
}

func (o *FileTree) GetUID() *string {
	if o == nil {
		return nil
	}
	return o.UID
}

func (o *FileTree) GetChildren() []FileTree {
	if o == nil {
		return nil
	}
	return o.Children
}

func (o *FileTree) GetContentType() *string {
	if o == nil {
		return nil
	}
	return o.ContentType
}

func (o *FileTree) GetMode() float64 {
	if o == nil {
		return 0.0
	}
	return o.Mode
}

func (o *FileTree) GetSymlink() *string {
	if o == nil {
		return nil
	}
	return o.Symlink
}