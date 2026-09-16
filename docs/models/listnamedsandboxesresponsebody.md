# ListNamedSandboxesResponseBody

## Example Usage

```typescript
import { ListNamedSandboxesResponseBody } from "@vercel/sdk/models/listnamedsandboxesop.js";

let value: ListNamedSandboxesResponseBody = {
  pagination: {
    count: 4183.09,
    next: "<value>",
  },
  sandboxes: [],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `pagination`                                                                     | [models.ListNamedSandboxesPagination](../models/listnamedsandboxespagination.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `sandboxes`                                                                      | [models.NamedSandbox](../models/namedsandbox.md)[]                               | :heavy_check_mark:                                                               | N/A                                                                              |