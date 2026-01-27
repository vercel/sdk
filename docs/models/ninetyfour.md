# NinetyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyFour } from "@vercel/sdk/models/userevent.js";

let value: NinetyFour = {
  projectId: "<id>",
  projectName: "<value>",
  onPullRequest: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `onPullRequest`    | *boolean*          | :heavy_check_mark: | N/A                |