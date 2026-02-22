# SeventyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyTwo } from "@vercel/sdk/models/oldteam.js";

let value: SeventyTwo = {
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