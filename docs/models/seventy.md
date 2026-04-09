# Seventy

The payload of the event, if requested.

## Example Usage

```typescript
import { Seventy } from "@vercel/sdk/models/fortyfour.js";

let value: Seventy = {
  sha: "<value>",
  gitUserPlatform: "<value>",
  projectName: "<value>",
  gitCommitterName: "<value>",
  source: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `sha`              | *string*           | :heavy_check_mark: | N/A                |
| `gitUserPlatform`  | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `gitCommitterName` | *string*           | :heavy_check_mark: | N/A                |
| `source`           | *string*           | :heavy_check_mark: | N/A                |