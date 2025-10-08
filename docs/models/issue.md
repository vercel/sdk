# Issue

Represents an error encountered while parsing a value to match the schema

## Example Usage

```typescript
import { Issue } from "@vercel/sdk/models/issue.js";

let value: Issue = {
  path: [],
  message: "<value>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `path`                                            | *models.PropertyKey*[]                            | :heavy_check_mark:                                | The path to the property where the issue occurred |
| `message`                                         | *string*                                          | :heavy_check_mark:                                | A descriptive message explaining the issue        |