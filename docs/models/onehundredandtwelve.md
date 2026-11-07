# OneHundredAndTwelve

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwelve } from "@vercel/sdk/models/rule.js";

let value: OneHundredAndTwelve = {
  gitlabLogin: "<value>",
  gitlabUserId: 712.14,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `gitlabLogin`      | *string*           | :heavy_check_mark: | N/A                |
| `gitlabUserId`     | *number*           | :heavy_check_mark: | N/A                |