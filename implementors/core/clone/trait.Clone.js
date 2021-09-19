(function() {var implementors = {};
implementors["core_simd"] = [{"text":"impl&lt;T, const LANES:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"core_simd/struct.Mask.html\" title=\"struct core_simd::Mask\">Mask</a>&lt;T, LANES&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core_simd/trait.MaskElement.html\" title=\"trait core_simd::MaskElement\">MaskElement</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"core_simd/struct.LaneCount.html\" title=\"struct core_simd::LaneCount\">LaneCount</a>&lt;LANES&gt;: <a class=\"trait\" href=\"core_simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::SupportedLaneCount\">SupportedLaneCount</a>,&nbsp;</span>","synthetic":false,"types":["core_simd::core_simd::masks::Mask"]},{"text":"impl&lt;T, const LANES:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"core_simd/struct.Simd.html\" title=\"struct core_simd::Simd\">Simd</a>&lt;T, LANES&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core_simd/trait.SimdElement.html\" title=\"trait core_simd::SimdElement\">SimdElement</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"core_simd/struct.LaneCount.html\" title=\"struct core_simd::LaneCount\">LaneCount</a>&lt;LANES&gt;: <a class=\"trait\" href=\"core_simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::SupportedLaneCount\">SupportedLaneCount</a>,&nbsp;</span>","synthetic":false,"types":["core_simd::core_simd::vector::Simd"]}];
implementors["test_helpers"] = [{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"test_helpers/array/struct.UniformArrayStrategy.html\" title=\"struct test_helpers::array::UniformArrayStrategy\">UniformArrayStrategy</a>&lt;S, T&gt;","synthetic":false,"types":["test_helpers::array::UniformArrayStrategy"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()