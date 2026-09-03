# UserEventPayloadPrivateLinkEndpoint

## Example Usage

```typescript
import { UserEventPayloadPrivateLinkEndpoint } from "@vercel/sdk/models/siftroute.js";

let value: UserEventPayloadPrivateLinkEndpoint = {
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `environmentIds`   | *string*[]         | :heavy_minus_sign: | N/A                |
| `privateDnsNames`  | *string*[]         | :heavy_minus_sign: | N/A                |