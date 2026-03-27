# GetSandboxesV2ResponseBody

## Example Usage

```typescript
import { GetSandboxesV2ResponseBody } from "@vercel/sdk/models/getsandboxesv2op.js";

let value: GetSandboxesV2ResponseBody = {
  sandboxes: [],
  pagination: {
    count: 4294.55,
    next: "<value>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `sandboxes`                                                              | [models.NamedSandbox](../models/namedsandbox.md)[]                       | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [models.GetSandboxesV2Pagination](../models/getsandboxesv2pagination.md) | :heavy_check_mark:                                                       | N/A                                                                      |