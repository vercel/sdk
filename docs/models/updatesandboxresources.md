# UpdateSandboxResources

Resources to define the VM

## Example Usage

```typescript
import { UpdateSandboxResources } from "@vercel/sdk/models/updatesandboxop.js";

let value: UpdateSandboxResources = {
  vcpus: 2,
  memory: 4096,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `vcpus`                                                                                | *number*                                                                               | :heavy_minus_sign:                                                                     | The number of virtual CPUs to allocate to the sandbox. Must be 1, or an even number.   | 2                                                                                      |
| `memory`                                                                               | *number*                                                                               | :heavy_minus_sign:                                                                     | The amount of memory in megabytes to allocate to the sandbox. Must equal vcpus * 2048. | 4096                                                                                   |