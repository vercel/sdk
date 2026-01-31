# NinetySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetySeven } from "@vercel/sdk/models/userevent.js";

let value: NinetySeven = {
  projectId: "<id>",
  projectName: "<value>",
  onPullRequest: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `onPullRequest`    | *boolean*          | :heavy_check_mark: | N/A                |